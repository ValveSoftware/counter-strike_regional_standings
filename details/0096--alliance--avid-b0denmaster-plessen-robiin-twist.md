### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [96](../standings_global.md)<br />
Regional Rank: [69]( ../standings_europe.md)<br />
Final Rank Value:  919.9<br />
<br />
Final Rank Value (919.9) = Starting Rank Value (914.6) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.110[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 914.6
- 400 + ( ( 0.240 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 914.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      386 | 2024-06-14 | MIBR              | L   | 0.981      | -            | -                | -                | -         |    -1.05 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |      406 | 2024-06-14 | Complexity        | L   | 0.979      | -            | -                | -                | -         |    -0.31 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |      539 | 2024-06-09 | Johnny Speeds     | L   | 0.947      | -            | -                | -                | -         |    -2.98 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |      563 | 2024-06-09 | Lilmix            | W   | 0.946      | 0.347        | 0.035 (0.011)    | -                | 1 (0.946) |    14.82 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |      962 | 2024-05-31 | VP.Prodigy        | L   | 0.885      | -            | -                | -                | -         |   -12.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1099 | 2024-05-24 | B8                | L   | 0.840      | -            | -                | -                | -         |    -4.43 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1472 | 2024-05-14 | kONO              | L   | 0.773      | -            | -                | -                | -         |   -12.57 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1778 | 2024-04-30 | B8                | L   | 0.679      | -            | -                | -                | -         |    -6.91 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1803 | 2024-04-29 | Endpoint          | W   | 0.672      | 0.384        | 0.018 (0.005)    | 0.498 (0.129)    | 0 (0.000) |    10.43 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1815 | 2024-04-28 | DMS               | W   | 0.666      | 0.500        | 0.005 (0.002)    | 0.494 (0.165)    | 0 (0.000) |     9.58 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1855 | 2024-04-26 | B8                | L   | 0.654      | -            | -                | -                | -         |    -6.01 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1929 | 2024-04-23 | Metizport         | L   | 0.633      | -            | -                | -                | -         |    -7.72 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1946 | 2024-04-22 | B8                | W   | 0.626      | 0.384        | 0.246 (0.059)    | 1.000 (0.241)    | 0 (0.000) |    14.16 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1969 | 2024-04-21 | Sangal            | L   | 0.619      | -            | -                | -                | -         |    -4.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     2049 | 2024-04-19 | 9 Pandas          | W   | 0.605      | 0.500        | 0.126 (0.038)    | 0.591 (0.179)    | 0 (0.000) |    13.49 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     2123 | 2024-04-17 | Nemiga            | L   | 0.593      | -            | -                | -                | -         |    -2.30 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     2130 | 2024-04-17 | ECLOT             | L   | 0.592      | -            | -                | -                | -         |    -3.52 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     2181 | 2024-04-15 | HAVU              | W   | 0.580      | 0.384        | -                | 0.202 (0.045)    | 0 (0.000) |     5.06 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     2185 | 2024-04-15 | MOUZ NXT          | L   | 0.578      | -            | -                | -                | -         |    -4.88 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     2213 | 2024-04-13 | ALTERNATE aTTaX   | L   | 0.565      | -            | -                | -                | -         |    -6.39 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2255 | 2024-04-11 | Zero Tenacity     | W   | 0.553      | 0.384        | 0.154 (0.033)    | 1.000 (0.212)    | 0 (0.000) |    12.20 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2345 | 2024-04-09 | BLEED             | L   | 0.541      | -            | -                | -                | -         |    -4.64 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2360 | 2024-04-09 | Astralis Talent   | W   | 0.538      | -            | -                | -                | 0 (0.000) |     4.78 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2408 | 2024-04-07 | Johnny Speeds     | L   | 0.527      | -            | -                | -                | -         |    -1.18 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2411 | 2024-04-07 | EYEBALLERS        | L   | 0.526      | -            | -                | -                | -         |    -7.95 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2420 | 2024-04-06 | Lilmix            | W   | 0.521      | 0.330        | 0.035 (0.006)    | -                | 0 (0.000) |     8.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2425 | 2024-04-06 | BetBoom           | L   | 0.519      | -            | -                | -                | -         |    -0.37 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2442 | 2024-04-05 | BLEED             | L   | 0.513      | -            | -                | -                | -         |    -4.52 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2477 | 2024-04-04 | BetBoom           | L   | 0.507      | -            | -                | -                | -         |    -0.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2487 | 2024-04-04 | Benched Heroes    | W   | 0.506      | -            | -                | -                | 0 (0.000) |     0.82 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2530 | 2024-04-03 | AMKAL             | L   | 0.499      | -            | -                | -                | -         |    -4.27 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2928 | 2024-03-13 | MOUZ NXT          | L   | 0.359      | -            | -                | -                | -         |    -3.15 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2960 | 2024-03-12 | Passion UA        | L   | 0.353      | -            | -                | -                | -         |    -4.23 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     3000 | 2024-03-10 | EYEBALLERS        | W   | 0.340      | 0.143        | -                | 0.619 (0.030)    | -         |     5.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     3015 | 2024-03-09 | BLUDS             | W   | 0.334      | -            | -                | -                | -         |     0.54 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     3026 | 2024-03-09 | Johnny Speeds     | W   | 0.333      | 0.143        | 0.162 (0.008)    | 0.852 (0.040)    | -         |     9.81 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     3031 | 2024-03-09 | Entropiq          | W   | 0.332      | -            | -                | -                | -         |     1.50 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     3074 | 2024-03-07 | ex-Sprout         | W   | 0.319      | -            | -                | -                | -         |     1.18 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     3106 | 2024-03-06 | Sashi             | L   | 0.312      | -            | -                | -                | -         |    -2.34 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3149 | 2024-03-05 | Viperio           | W   | 0.305      | -            | -                | -                | -         |     0.85 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3229 | 2024-03-01 | 9INE              | L   | 0.279      | -            | -                | -                | -         |    -7.99 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3256 | 2024-02-28 | Sangal            | W   | 0.266      | 0.143        | 0.232 (0.009)    | 0.893 (0.034)    | -         |     6.70 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3311 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.247      | 0.358        | 0.050 (0.004)    | 0.644 (0.057)    | -         |     5.44 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3481 | 2024-02-18 | Portugal          | W   | 0.200      | -            | -                | -                | -         |     1.80 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     3710 | 2024-02-06 | 9INE              | W   | 0.119      | -            | -                | -                | -         |     0.38 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3735 | 2024-02-04 | Secret            | L   | 0.107      | -            | -                | -                | -         |    -2.95 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     3873 | 2024-01-29 | Passion UA        | L   | 0.066      | -            | -                | -                | -         |    -0.70 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     3887 | 2024-01-28 | Spirit Academy    | L   | 0.058      | -            | -                | -                | -         |    -1.63 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     3955 | 2024-01-24 | Gaimin Gladiators | L   | 0.032      | -            | -                | -                | -         |    -0.26 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,122.50)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $2,000.00      | $1,986.13       |
| 2024-06-09 |      0.947 | $2,889.00      | $2,736.02       |
| 2024-05-18 |      0.801 | $500.00        | $400.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
