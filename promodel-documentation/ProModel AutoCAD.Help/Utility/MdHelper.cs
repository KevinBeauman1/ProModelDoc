using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Hosting;
using System.Web;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Antiforgery.Internal;
using Microsoft.AspNetCore.WebUtilities;

namespace ProModelAutodeskEdition.Help
{
	public static class MdHelper
	{
		public static string GetMdAsHtml(HttpContext httpContext, string fileName)
		{
			if (!(httpContext.RequestServices.GetService(typeof(IHostingEnvironment)) is IHostingEnvironment hostingEnvironment))
			{
				return "Failed to get hosting environment.";
			}

			// trim any query parameters off
			var foundQuestionMark = fileName.IndexOf("&v");
			if (foundQuestionMark > 0)
			{
				fileName = fileName.Substring(0, foundQuestionMark);
			}

			string filePath = GetFilePath(hostingEnvironment, fileName);
			var pipelineBuild = new Markdig.MarkdownPipelineBuilder();
			pipelineBuild = Markdig.MarkdownExtensions.UseAdvancedExtensions(pipelineBuild);
			pipelineBuild = Markdig.MarkdownExtensions.UseEmojiAndSmiley(pipelineBuild);
			
			var pipeline = pipelineBuild.Build();

			using (var sr = new StreamReader(filePath))
			{
				return ConvertLocalImagesToAbsolutePaths(httpContext, Markdig.Markdown.ToHtml(sr.ReadToEnd(), pipeline), fileName);
			}
		}
		private static string GetFilePath(IHostingEnvironment hostingEnvironment, string fileName)
		{
			return Path.Combine(hostingEnvironment.WebRootPath, fileName.Replace(@"/", @"\"));
		}
		private static string ConvertLocalImagesToAbsolutePaths(HttpContext httpContext, string html, string fileName)
		{
			if (!(httpContext.RequestServices.GetService(typeof(IMemoryCache)) is IMemoryCache memoryCache))
			{
				throw new Exception("Failed to get memory cache.");
			}
			if (!(httpContext.RequestServices.GetService(typeof(IHostingEnvironment)) is IHostingEnvironment hostingEnvironment))
			{
				throw new Exception("Failed to get hosting environment.");
			}

			var path = Path.GetDirectoryName(fileName).Replace(@"\", @"/");
			var searchIndex = 0;
			var imageSearchTerm = "<img src=\"";
			var imageSearchTermLength = imageSearchTerm.Length;

			while (true)
			{
				var foundImageStart = html.IndexOf(imageSearchTerm, searchIndex);
				if (foundImageStart < 0)
				{
					break;
				}

				var startOfImageSource = foundImageStart + imageSearchTermLength;
				var foundImageEnd = html.IndexOf("\"", startOfImageSource + 1);
				var foundFileImage = html.Substring(startOfImageSource, foundImageEnd - startOfImageSource);
				var foundImagePath = $"{path}/{foundFileImage}";

				string hash;
				if (!memoryCache.TryGetValue(foundImagePath, out hash))
				{
					var fileProvider = new PhysicalFileProvider(hostingEnvironment.WebRootPath);
					var fileInfo = fileProvider.GetFileInfo(foundImagePath);
					hash = GetHashForFile(fileInfo);

					var cacheEntryOptions = new MemoryCacheEntryOptions();
					cacheEntryOptions.AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1);
					memoryCache.Set<string>(fileName, hash, TimeSpan.FromHours(1));
				}

				var imageSourceWithHash = $"{foundImagePath}?v={hash}";
				html = html.Substring(0, foundImageStart) + $"<img class=\"img-fluid\" src=\"/{imageSourceWithHash}" + html.Substring(foundImageEnd);
			}

			return html;
		}

		public static IHtmlContent MDLink(this IHtmlHelper helper, string linkText, string fileName)
		{
			return helper.ActionLink(linkText, "Topic", "Help", new { page = fileName }, new { @class = "nav-link" });
		}

		private static string GetHashForFile(IFileInfo fileInfo)
		{
			using (var sha256 = CryptographyAlgorithms.CreateSHA256())
			{
				using (var readStream = fileInfo.CreateReadStream())
				{
					var hash = sha256.ComputeHash(readStream);
					return WebEncoders.Base64UrlEncode(hash);
				}
			}
		}
	}
}
