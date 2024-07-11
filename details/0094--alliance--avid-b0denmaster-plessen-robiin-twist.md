### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, b0denmaster, PlesseN, robiin, twist<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  922.7<br />
<br />
Final Rank Value (922.7) = Starting Rank Value (913.4) + Head To Head Adjustments (9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.122[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 913.4
- 400 + ( ( 0.243 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 913.4


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
|           50 |      222 | 2024-06-14 | MIBR              | L   | 1.000      | -            | -                | -                | -         |    -1.05 | avid, b0denmaster, PlesseN, robiin, twist |
|           49 |      242 | 2024-06-14 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -0.34 | avid, b0denmaster, PlesseN, robiin, twist |
|           48 |      375 | 2024-06-09 | Johnny Speeds     | L   | 0.987      | -            | -                | -                | -         |    -3.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           47 |      399 | 2024-06-09 | Lilmix            | W   | 0.985      | 0.347        | 0.034 (0.011)    | -                | 1 (0.985) |    15.00 | avid, b0denmaster, PlesseN, robiin, twist |
|           46 |      798 | 2024-05-31 | VP.Prodigy        | L   | 0.925      | -            | -                | -                | -         |   -12.85 | avid, b0denmaster, PlesseN, robiin, twist |
|           45 |      935 | 2024-05-24 | B8                | L   | 0.880      | -            | -                | -                | -         |    -4.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           44 |     1308 | 2024-05-14 | kONO              | L   | 0.813      | -            | -                | -                | -         |   -13.45 | avid, b0denmaster, PlesseN, robiin, twist |
|           43 |     1614 | 2024-04-30 | B8                | L   | 0.719      | -            | -                | -                | -         |    -7.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           42 |     1639 | 2024-04-29 | Endpoint          | W   | 0.711      | 0.384        | 0.017 (0.005)    | 0.524 (0.143)    | 0 (0.000) |    10.81 | avid, b0denmaster, PlesseN, robiin, twist |
|           41 |     1651 | 2024-04-28 | DMS               | W   | 0.706      | 0.500        | 0.005 (0.002)    | 0.471 (0.166)    | 0 (0.000) |     9.58 | avid, b0denmaster, PlesseN, robiin, twist |
|           40 |     1691 | 2024-04-26 | B8                | L   | 0.694      | -            | -                | -                | -         |    -6.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           39 |     1765 | 2024-04-23 | Metizport         | L   | 0.673      | -            | -                | -                | -         |    -8.12 | avid, b0denmaster, PlesseN, robiin, twist |
|           38 |     1782 | 2024-04-22 | B8                | W   | 0.665      | 0.384        | 0.242 (0.062)    | 1.000 (0.256)    | 0 (0.000) |    14.93 | avid, b0denmaster, PlesseN, robiin, twist |
|           37 |     1805 | 2024-04-21 | Sangal            | L   | 0.658      | -            | -                | -                | -         |    -4.79 | avid, b0denmaster, PlesseN, robiin, twist |
|           36 |     1885 | 2024-04-19 | 9 Pandas          | W   | 0.645      | 0.500        | 0.125 (0.040)    | 0.625 (0.201)    | 0 (0.000) |    14.36 | avid, b0denmaster, PlesseN, robiin, twist |
|           35 |     1959 | 2024-04-17 | Nemiga            | L   | 0.633      | -            | -                | -                | -         |    -2.41 | avid, b0denmaster, PlesseN, robiin, twist |
|           34 |     1966 | 2024-04-17 | Czech Republic    | L   | 0.632      | -            | -                | -                | -         |    -3.87 | avid, b0denmaster, PlesseN, robiin, twist |
|           33 |     2017 | 2024-04-15 | HAVU              | W   | 0.619      | 0.384        | -                | 0.211 (0.050)    | 0 (0.000) |     5.29 | avid, b0denmaster, PlesseN, robiin, twist |
|           32 |     2021 | 2024-04-15 | MOUZ NXT          | L   | 0.618      | -            | -                | -                | -         |    -5.35 | avid, b0denmaster, PlesseN, robiin, twist |
|           31 |     2049 | 2024-04-13 | ALTERNATE aTTaX   | L   | 0.605      | -            | -                | -                | -         |    -7.19 | avid, b0denmaster, PlesseN, robiin, twist |
|           30 |     2091 | 2024-04-11 | Zero Tenacity     | W   | 0.592      | 0.384        | 0.153 (0.035)    | 1.000 (0.228)    | 0 (0.000) |    12.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           29 |     2181 | 2024-04-09 | BLEED             | L   | 0.580      | -            | -                | -                | -         |    -1.39 | avid, b0denmaster, PlesseN, robiin, twist |
|           28 |     2196 | 2024-04-09 | Astralis Talent   | W   | 0.578      | -            | -                | -                | 0 (0.000) |     5.21 | avid, b0denmaster, PlesseN, robiin, twist |
|           27 |     2244 | 2024-04-07 | Johnny Speeds     | L   | 0.567      | -            | -                | -                | -         |    -1.36 | avid, b0denmaster, PlesseN, robiin, twist |
|           26 |     2247 | 2024-04-07 | EYEBALLERS        | L   | 0.566      | -            | -                | -                | -         |    -8.63 | avid, b0denmaster, PlesseN, robiin, twist |
|           25 |     2256 | 2024-04-06 | Lilmix            | W   | 0.561      | 0.330        | 0.034 (0.006)    | -                | 0 (0.000) |     8.85 | avid, b0denmaster, PlesseN, robiin, twist |
|           24 |     2261 | 2024-04-06 | BetBoom           | L   | 0.559      | -            | -                | -                | -         |    -0.37 | avid, b0denmaster, PlesseN, robiin, twist |
|           23 |     2278 | 2024-04-05 | BLEED             | L   | 0.553      | -            | -                | -                | -         |    -1.30 | avid, b0denmaster, PlesseN, robiin, twist |
|           22 |     2313 | 2024-04-04 | BetBoom           | L   | 0.547      | -            | -                | -                | -         |    -0.38 | avid, b0denmaster, PlesseN, robiin, twist |
|           21 |     2323 | 2024-04-04 | Benched Heroes    | W   | 0.546      | -            | -                | -                | 0 (0.000) |     0.89 | avid, b0denmaster, PlesseN, robiin, twist |
|           20 |     2366 | 2024-04-03 | AMKAL             | L   | 0.539      | -            | -                | -                | -         |    -4.28 | avid, b0denmaster, PlesseN, robiin, twist |
|           19 |     2764 | 2024-03-13 | MOUZ NXT          | L   | 0.399      | -            | -                | -                | -         |    -3.50 | avid, b0denmaster, PlesseN, robiin, twist |
|           18 |     2796 | 2024-03-12 | Passion UA        | L   | 0.392      | -            | -                | -                | -         |    -4.81 | avid, b0denmaster, PlesseN, robiin, twist |
|           17 |     2836 | 2024-03-10 | EYEBALLERS        | W   | 0.380      | 0.143        | -                | 0.646 (0.035)    | -         |     6.28 | avid, b0denmaster, PlesseN, robiin, twist |
|           16 |     2851 | 2024-03-09 | BLUDS             | W   | 0.373      | -            | -                | -                | -         |     0.62 | avid, b0denmaster, PlesseN, robiin, twist |
|           15 |     2862 | 2024-03-09 | Johnny Speeds     | W   | 0.372      | 0.143        | 0.158 (0.008)    | 0.825 (0.044)    | -         |    10.94 | avid, b0denmaster, PlesseN, robiin, twist |
|           14 |     2867 | 2024-03-09 | Entropiq          | W   | 0.372      | -            | -                | -                | -         |     1.74 | avid, b0denmaster, PlesseN, robiin, twist |
|           13 |     2910 | 2024-03-07 | ex-Sprout         | W   | 0.359      | -            | -                | -                | -         |     1.40 | avid, b0denmaster, PlesseN, robiin, twist |
|           12 |     2942 | 2024-03-06 | Sashi             | L   | 0.352      | -            | -                | -                | -         |    -2.67 | avid, b0denmaster, PlesseN, robiin, twist |
|           11 |     2985 | 2024-03-05 | Viperio           | W   | 0.345      | -            | -                | -                | -         |     1.01 | avid, b0denmaster, PlesseN, robiin, twist |
|           10 |     3065 | 2024-03-01 | 9INE              | L   | 0.319      | -            | -                | -                | -         |    -9.11 | avid, b0denmaster, PlesseN, robiin, twist |
|            9 |     3092 | 2024-02-28 | Sangal            | W   | 0.305      | 0.143        | 0.231 (0.010)    | 0.853 (0.037)    | -         |     7.71 | avid, b0denmaster, PlesseN, robiin, twist |
|            8 |     3147 | 2024-02-25 | ALTERNATE aTTaX   | W   | 0.287      | 0.358        | 0.050 (0.005)    | 0.577 (0.059)    | -         |     6.25 | avid, b0denmaster, PlesseN, robiin, twist |
|            7 |     3317 | 2024-02-18 | Portugal          | W   | 0.239      | -            | -                | -                | -         |     2.22 | avid, b0denmaster, PlesseN, robiin, twist |
|            6 |     3546 | 2024-02-06 | 9INE              | W   | 0.158      | -            | -                | -                | -         |     0.51 | avid, b0denmaster, PlesseN, robiin, twist |
|            5 |     3571 | 2024-02-04 | Secret            | L   | 0.146      | -            | -                | -                | -         |    -4.03 | avid, b0denmaster, PlesseN, robiin, twist |
|            4 |     3709 | 2024-01-29 | Passion UA        | L   | 0.106      | -            | -                | -                | -         |    -1.13 | avid, b0denmaster, PlesseN, robiin, twist |
|            3 |     3723 | 2024-01-28 | Spirit Academy    | L   | 0.098      | -            | -                | -                | -         |    -2.73 | avid, b0denmaster, PlesseN, robiin, twist |
|            2 |     3791 | 2024-01-24 | Gaimin Gladiators | L   | 0.072      | -            | -                | -                | -         |    -0.50 | avid, b0denmaster, PlesseN, robiin, twist |
|            1 |     4120 | 2024-01-16 | Romania           | L   | 0.021      | -            | -                | -                | -         |    -0.37 | avid, b0denmaster, PlesseN, robiin, twist |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,270.61)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-09 |      0.987 | $2,889.00      | $2,850.46       |
| 2024-05-18 |      0.840 | $500.00        | $420.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
