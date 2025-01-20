### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [44](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [12]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  1145.5<br />
<br />
Final Rank Value (1145.5) = Starting Rank Value (1222.7) + Head To Head Adjustments (-77.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.510[<sup>1</sup>](#table2)
- Bounty Collected: 0.369[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.650[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1222.7
- 400 + ( ( 0.414 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1222.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |      298 | 2024-12-08 | NRG               | L   | 0.922      | -            | -                | -                | -         |   -12.54 | doc, gafolo, hoax, koala, rdnzao |
|           59 |      299 | 2024-12-08 | BOSS              | W   | 0.921      | 0.384        | 0.041 (0.015)    | 0.422 (0.149)    | 1 (0.921) |    11.44 | doc, gafolo, hoax, koala, rdnzao |
|           58 |      301 | 2024-12-08 | NRG               | L   | 0.920      | -            | -                | -                | -         |   -13.09 | doc, gafolo, hoax, koala, rdnzao |
|           57 |      323 | 2024-12-07 | Nouns             | W   | 0.915      | 0.384        | 0.041 (0.014)    | 0.576 (0.203)    | 1 (0.915) |    12.20 | doc, gafolo, hoax, koala, rdnzao |
|           56 |      331 | 2024-12-07 | Take Flyte        | W   | 0.913      | -            | -                | -                | 1 (0.913) |     2.56 | doc, gafolo, hoax, koala, rdnzao |
|           55 |      359 | 2024-12-06 | MIGHT             | W   | 0.908      | 0.384        | 0.006 (0.002)    | -                | 1 (0.908) |     3.41 | doc, gafolo, hoax, koala, rdnzao |
|           54 |      495 | 2024-11-30 | ODDIK             | L   | 0.867      | -            | -                | -                | -         |   -20.65 | doc, gafolo, hoax, koala, rdnzao |
|           53 |      537 | 2024-11-29 | NITRO             | W   | 0.858      | 0.371        | -                | 0.300 (0.095)    | 0 (0.000) |     2.03 | doc, gafolo, hoax, koala, rdnzao |
|           52 |      547 | 2024-11-28 | 2070              | W   | 0.852      | -            | -                | -                | 0 (0.000) |     1.60 | doc, gafolo, hoax, koala, rdnzao |
|           51 |      645 | 2024-11-22 | Fluxo             | L   | 0.815      | -            | -                | -                | -         |   -13.47 | doc, gafolo, hoax, koala, rdnzao |
|           50 |      966 | 2024-11-09 | Fluxo             | L   | 0.728      | -            | -                | -                | -         |   -12.90 | doc, gafolo, hoax, koala, rdnzao |
|           49 |      973 | 2024-11-09 | Solid             | W   | 0.726      | 0.371        | 0.046 (0.012)    | 0.649 (0.174)    | -         |     4.50 | doc, gafolo, hoax, koala, rdnzao |
|           48 |      992 | 2024-11-08 | GameHunters       | W   | 0.719      | 0.371        | -                | 0.335 (0.089)    | -         |     1.57 | doc, gafolo, hoax, koala, rdnzao |
|           47 |     1006 | 2024-11-07 | MIBR Academy      | W   | 0.714      | -            | -                | -                | -         |     1.19 | doc, gafolo, hoax, koala, rdnzao |
|           46 |     1218 | 2024-10-27 | ODDIK             | W   | 0.640      | 0.364        | 0.085 (0.020)    | 0.376 (0.087)    | 1 (0.640) |     4.33 | doc, gafolo, hoax, koala, rdnzao |
|           45 |     1239 | 2024-10-26 | Fluxo             | W   | 0.634      | 0.364        | 0.130 (0.030)    | 0.529 (0.122)    | 1 (0.634) |     8.86 | doc, gafolo, hoax, koala, rdnzao |
|           44 |     1444 | 2024-10-16 | Imperial          | L   | 0.567      | -            | -                | -                | -         |    -9.08 | doc, gafolo, hoax, koala, rdnzao |
|           43 |     1600 | 2024-10-08 | Case              | W   | 0.514      | -            | -                | -                | -         |     1.50 | doc, gafolo, hoax, koala, rdnzao |
|           42 |     1606 | 2024-10-08 | Case              | W   | 0.513      | -            | -                | -                | -         |     1.52 | doc, gafolo, hoax, koala, rdnzao |
|           41 |     1788 | 2024-10-02 | Solid             | W   | 0.474      | 0.450        | 0.046 (0.010)    | 0.649 (0.138)    | -         |     3.04 | doc, gafolo, hoax, koala, rdnzao |
|           40 |     1791 | 2024-10-02 | Solid             | L   | 0.473      | -            | -                | -                | -         |   -12.10 | doc, gafolo, hoax, koala, rdnzao |
|           39 |     1838 | 2024-10-01 | Imperial          | L   | 0.467      | -            | -                | -                | -         |    -7.99 | doc, gafolo, hoax, koala, rdnzao |
|           38 |     1842 | 2024-10-01 | Imperial          | W   | 0.467      | 0.450        | 0.164 (0.034)    | 0.424 (0.089)    | -         |     6.85 | doc, gafolo, hoax, koala, rdnzao |
|           37 |     1851 | 2024-10-01 | MIBR              | W   | 0.466      | 0.450        | 0.210 (0.044)    | 0.610 (0.128)    | -         |    12.77 | doc, gafolo, hoax, koala, rdnzao |
|           36 |     1853 | 2024-10-01 | MIBR              | L   | 0.466      | -            | -                | -                | -         |    -1.88 | doc, gafolo, hoax, koala, rdnzao |
|           35 |     2010 | 2024-09-26 | BESTIA            | L   | 0.434      | -            | -                | -                | -         |    -8.99 | doc, gafolo, hoax, koala, rdnzao |
|           34 |     2027 | 2024-09-26 | Imperial          | L   | 0.432      | -            | -                | -                | -         |    -7.04 | doc, gafolo, hoax, koala, rdnzao |
|           33 |     2064 | 2024-09-25 | Hype              | L   | 0.427      | -            | -                | -                | -         |   -12.47 | doc, gafolo, hoax, koala, rdnzao |
|           32 |     2069 | 2024-09-25 | Hype              | W   | 0.427      | -            | -                | -                | -         |     0.96 | doc, gafolo, hoax, koala, rdnzao |
|           31 |     2084 | 2024-09-25 | MIBR              | W   | 0.425      | 0.143        | 0.210 (0.013)    | -                | -         |    11.81 | doc, gafolo, hoax, koala, rdnzao |
|           30 |     2115 | 2024-09-24 | paiN              | L   | 0.420      | -            | -                | -                | -         |    -1.89 | doc, gafolo, hoax, koala, rdnzao |
|           29 |     2122 | 2024-09-24 | paiN              | L   | 0.420      | -            | -                | -                | -         |    -1.93 | doc, gafolo, hoax, koala, rdnzao |
|           28 |     2547 | 2024-09-10 | inSanitY          | L   | 0.327      | -            | -                | -                | -         |    -9.37 | doc, gafolo, hoax, koala, rdnzao |
|           27 |     2549 | 2024-09-10 | inSanitY          | W   | 0.327      | -            | -                | -                | -         |     0.93 | doc, gafolo, hoax, koala, rdnzao |
|           26 |     2673 | 2024-09-05 | Dusty Roots       | W   | 0.294      | -            | -                | -                | -         |     1.21 | doc, gafolo, hoax, koala, rdnzao |
|           25 |     2674 | 2024-09-05 | Dusty Roots       | W   | 0.293      | -            | -                | -                | -         |     1.22 | doc, gafolo, hoax, koala, rdnzao |
|           24 |     2720 | 2024-09-04 | ODDIK             | L   | 0.287      | -            | -                | -                | -         |    -7.36 | doc, gafolo, hoax, koala, rdnzao |
|           23 |     2760 | 2024-09-03 | inSanitY          | W   | 0.279      | -            | -                | -                | -         |     0.78 | doc, gafolo, hoax, koala, rdnzao |
|           22 |     2780 | 2024-09-02 | Yawara            | W   | 0.274      | -            | -                | -                | -         |     0.44 | doc, gafolo, hoax, koala, rdnzao |
|           21 |     2985 | 2024-08-27 | ODDIK             | L   | 0.232      | -            | -                | -                | -         |    -6.05 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     3043 | 2024-08-26 | W7M               | L   | 0.226      | -            | -                | -                | -         |    -6.98 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     3063 | 2024-08-26 | Hype              | W   | 0.225      | -            | -                | -                | -         |     0.43 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     3394 | 2024-08-16 | ODDIK             | L   | 0.160      | -            | -                | -                | -         |    -4.20 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     3398 | 2024-08-16 | Case              | W   | 0.159      | -            | -                | -                | 1 (0.159) |     0.33 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     3422 | 2024-08-15 | ODDIK             | L   | 0.153      | -            | -                | -                | -         |    -4.03 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     3450 | 2024-08-14 | Case              | W   | 0.147      | -            | -                | -                | 1 (0.147) |     0.30 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     3861 | 2024-08-02 | paiN              | L   | 0.065      | -            | -                | -                | -         |    -0.37 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     3890 | 2024-08-01 | Hype              | W   | 0.059      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     3897 | 2024-08-01 | paiN              | L   | 0.058      | -            | -                | -                | -         |    -0.33 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     3930 | 2024-07-31 | MIBR              | L   | 0.053      | -            | -                | -                | -         |    -0.23 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     3935 | 2024-07-31 | Solid             | W   | 0.053      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     3971 | 2024-07-30 | Hype              | W   | 0.047      | -            | -                | -                | -         |     0.09 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4050 | 2024-07-28 | Bad News Chickens | W   | 0.033      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4096 | 2024-07-26 | Imperial          | L   | 0.020      | -            | -                | -                | -         |    -0.38 | doc, gafolo, koala, pepe, rdnzao |
|            6 |     4123 | 2024-07-25 | BESTIA            | W   | 0.014      | -            | -                | -                | -         |     0.13 | doc, gafolo, koala, pepe, rdnzao |
|            5 |     4127 | 2024-07-25 | Patins da Ferrari | W   | 0.014      | -            | -                | -                | -         |     0.00 | doc, gafolo, koala, pepe, rdnzao |
|            4 |     4173 | 2024-07-24 | Bad News Chickens | W   | 0.006      | -            | -                | -                | -         |     0.00 | doc, gafolo, koala, pepe, rdnzao |
|            3 |     4178 | 2024-07-24 | Yawara            | W   | 0.005      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |
|            2 |     4200 | 2024-07-23 | ODDIK             | L   | 0.001      | -            | -                | -                | -         |    -0.01 | doc, gafolo, koala, pepe, rdnzao |
|            1 |     4204 | 2024-07-23 | W7M               | W   | 0.000      | -            | -                | -                | -         |     0.00 | doc, gafolo, koala, pepe, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,304.45)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.922 | $7,500.00      | $6,911.42       |
| 2024-11-30 |      0.867 | $1,500.00      | $1,301.20       |
| 2024-11-24 |      0.826 | $3,940.00      | $3,255.94       |
| 2024-11-09 |      0.728 | $4,000.00      | $2,910.83       |
| 2024-10-27 |      0.640 | $10,650.00     | $6,815.83       |
| 2024-10-20 |      0.593 | $2,000.00      | $1,186.75       |
| 2024-09-04 |      0.288 | $1,500.00      | $431.43         |
| 2024-08-16 |      0.160 | $9,000.00      | $1,440.78       |
| 2024-08-02 |      0.067 | $750.00        | $50.26          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
