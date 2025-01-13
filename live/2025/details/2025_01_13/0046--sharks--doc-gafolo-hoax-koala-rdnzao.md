### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, gafolo, hoax, koala, rdnzao<br />
Global Rank: [46](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [13]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  1147.9<br />
<br />
Final Rank Value (1147.9) = Starting Rank Value (1231.7) + Head To Head Adjustments (-83.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.657[<sup>2</sup>](#table1)

The average of these factors is 0.419<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1231.7
- 400 + ( ( 0.419 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1231.7


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
|           66 |      285 | 2024-12-08 | NRG               | L   | 0.964      | -            | -                | -                | -         |   -12.98 | doc, gafolo, hoax, koala, rdnzao |
|           65 |      286 | 2024-12-08 | BOSS              | W   | 0.963      | 0.384        | 0.042 (0.015)    | 0.421 (0.156)    | 1 (0.963) |    11.94 | doc, gafolo, hoax, koala, rdnzao |
|           64 |      288 | 2024-12-08 | NRG               | L   | 0.962      | -            | -                | -                | -         |   -13.58 | doc, gafolo, hoax, koala, rdnzao |
|           63 |      310 | 2024-12-07 | Nouns             | W   | 0.957      | 0.384        | 0.042 (0.015)    | 0.578 (0.213)    | 1 (0.957) |    13.05 | doc, gafolo, hoax, koala, rdnzao |
|           62 |      318 | 2024-12-07 | Take Flyte        | W   | 0.955      | -            | -                | -                | 1 (0.955) |     2.68 | doc, gafolo, hoax, koala, rdnzao |
|           61 |      346 | 2024-12-06 | MIGHT             | W   | 0.950      | -            | -                | -                | 1 (0.950) |     3.54 | doc, gafolo, hoax, koala, rdnzao |
|           60 |      482 | 2024-11-30 | ODDIK             | L   | 0.909      | -            | -                | -                | -         |   -21.22 | doc, gafolo, hoax, koala, rdnzao |
|           59 |      524 | 2024-11-29 | NITRO             | W   | 0.900      | 0.371        | -                | 0.290 (0.097)    | 0 (0.000) |     2.12 | doc, gafolo, hoax, koala, rdnzao |
|           58 |      534 | 2024-11-28 | 2070              | W   | 0.894      | -            | -                | -                | 0 (0.000) |     1.67 | doc, gafolo, hoax, koala, rdnzao |
|           57 |      632 | 2024-11-22 | Fluxo             | L   | 0.857      | -            | -                | -                | -         |   -13.84 | doc, gafolo, hoax, koala, rdnzao |
|           56 |      953 | 2024-11-09 | Fluxo             | L   | 0.770      | -            | -                | -                | -         |   -13.39 | doc, gafolo, hoax, koala, rdnzao |
|           55 |      960 | 2024-11-09 | Solid             | W   | 0.768      | 0.371        | 0.045 (0.013)    | 0.634 (0.180)    | -         |     4.93 | doc, gafolo, hoax, koala, rdnzao |
|           54 |      979 | 2024-11-08 | GameHunters       | W   | 0.761      | 0.371        | -                | 0.323 (0.091)    | -         |     1.66 | doc, gafolo, hoax, koala, rdnzao |
|           53 |      993 | 2024-11-07 | MIBR Academy      | W   | 0.756      | -            | -                | -                | -         |     1.24 | doc, gafolo, hoax, koala, rdnzao |
|           52 |     1205 | 2024-10-27 | ODDIK             | W   | 0.682      | 0.364        | 0.091 (0.022)    | 0.388 (0.096)    | 1 (0.682) |     4.92 | doc, gafolo, hoax, koala, rdnzao |
|           51 |     1226 | 2024-10-26 | Fluxo             | W   | 0.676      | 0.364        | 0.131 (0.032)    | 0.549 (0.135)    | 1 (0.676) |     9.68 | doc, gafolo, hoax, koala, rdnzao |
|           50 |     1431 | 2024-10-16 | Imperial          | L   | 0.609      | -            | -                | -                | -         |    -9.41 | doc, gafolo, hoax, koala, rdnzao |
|           49 |     1587 | 2024-10-08 | Case              | W   | 0.556      | 0.450        | 0.009 (0.002)    | -                | -         |     1.73 | doc, gafolo, hoax, koala, rdnzao |
|           48 |     1593 | 2024-10-08 | Case              | W   | 0.555      | -            | -                | -                | -         |     1.75 | doc, gafolo, hoax, koala, rdnzao |
|           47 |     1775 | 2024-10-02 | Solid             | W   | 0.516      | 0.450        | 0.045 (0.010)    | 0.634 (0.147)    | -         |     3.44 | doc, gafolo, hoax, koala, rdnzao |
|           46 |     1778 | 2024-10-02 | Solid             | L   | 0.515      | -            | -                | -                | -         |   -13.06 | doc, gafolo, hoax, koala, rdnzao |
|           45 |     1825 | 2024-10-01 | Imperial          | L   | 0.509      | -            | -                | -                | -         |    -8.45 | doc, gafolo, hoax, koala, rdnzao |
|           44 |     1829 | 2024-10-01 | Imperial          | W   | 0.509      | 0.450        | 0.165 (0.038)    | 0.437 (0.100)    | -         |     7.75 | doc, gafolo, hoax, koala, rdnzao |
|           43 |     1838 | 2024-10-01 | MIBR              | W   | 0.508      | 0.450        | 0.213 (0.049)    | 0.606 (0.139)    | -         |    13.95 | doc, gafolo, hoax, koala, rdnzao |
|           42 |     1840 | 2024-10-01 | MIBR              | L   | 0.508      | -            | -                | -                | -         |    -2.01 | doc, gafolo, hoax, koala, rdnzao |
|           41 |     1997 | 2024-09-26 | BESTIA            | L   | 0.476      | -            | -                | -                | -         |    -9.74 | doc, gafolo, hoax, koala, rdnzao |
|           40 |     2014 | 2024-09-26 | Imperial          | L   | 0.474      | -            | -                | -                | -         |    -7.41 | doc, gafolo, hoax, koala, rdnzao |
|           39 |     2051 | 2024-09-25 | Hype              | L   | 0.469      | -            | -                | -                | -         |   -13.65 | doc, gafolo, hoax, koala, rdnzao |
|           38 |     2056 | 2024-09-25 | Hype              | W   | 0.469      | -            | -                | -                | -         |     1.11 | doc, gafolo, hoax, koala, rdnzao |
|           37 |     2071 | 2024-09-25 | MIBR              | W   | 0.467      | 0.143        | 0.213 (0.014)    | -                | -         |    13.02 | doc, gafolo, hoax, koala, rdnzao |
|           36 |     2102 | 2024-09-24 | paiN              | L   | 0.463      | -            | -                | -                | -         |    -1.99 | doc, gafolo, hoax, koala, rdnzao |
|           35 |     2109 | 2024-09-24 | paiN              | L   | 0.462      | -            | -                | -                | -         |    -2.03 | doc, gafolo, hoax, koala, rdnzao |
|           34 |     2534 | 2024-09-10 | inSanitY          | L   | 0.369      | -            | -                | -                | -         |   -10.54 | doc, gafolo, hoax, koala, rdnzao |
|           33 |     2536 | 2024-09-10 | inSanitY          | W   | 0.369      | -            | -                | -                | -         |     1.07 | doc, gafolo, hoax, koala, rdnzao |
|           32 |     2660 | 2024-09-05 | Dusty Roots       | W   | 0.336      | -            | -                | -                | -         |     1.37 | doc, gafolo, hoax, koala, rdnzao |
|           31 |     2661 | 2024-09-05 | Dusty Roots       | W   | 0.335      | -            | -                | -                | -         |     1.39 | doc, gafolo, hoax, koala, rdnzao |
|           30 |     2707 | 2024-09-04 | ODDIK             | L   | 0.329      | -            | -                | -                | -         |    -8.26 | doc, gafolo, hoax, koala, rdnzao |
|           29 |     2747 | 2024-09-03 | inSanitY          | W   | 0.321      | -            | -                | -                | -         |     0.92 | doc, gafolo, hoax, koala, rdnzao |
|           28 |     2767 | 2024-09-02 | Yawara            | W   | 0.316      | -            | -                | -                | -         |     0.50 | doc, gafolo, hoax, koala, rdnzao |
|           27 |     2972 | 2024-08-27 | ODDIK             | L   | 0.275      | -            | -                | -                | -         |    -7.01 | doc, gafolo, koala, pepe, rdnzao |
|           26 |     3030 | 2024-08-26 | W7M               | L   | 0.268      | -            | -                | -                | -         |    -8.15 | doc, gafolo, koala, pepe, rdnzao |
|           25 |     3050 | 2024-08-26 | Hype              | W   | 0.267      | -            | -                | -                | -         |     0.52 | doc, gafolo, koala, pepe, rdnzao |
|           24 |     3381 | 2024-08-16 | ODDIK             | L   | 0.202      | -            | -                | -                | -         |    -5.22 | doc, gafolo, koala, pepe, rdnzao |
|           23 |     3385 | 2024-08-16 | Case              | W   | 0.201      | -            | -                | -                | 1 (0.201) |     0.44 | doc, gafolo, koala, pepe, rdnzao |
|           22 |     3409 | 2024-08-15 | ODDIK             | L   | 0.195      | -            | -                | -                | -         |    -5.08 | doc, gafolo, koala, pepe, rdnzao |
|           21 |     3437 | 2024-08-14 | Case              | W   | 0.189      | -            | -                | -                | 1 (0.189) |     0.40 | doc, gafolo, koala, pepe, rdnzao |
|           20 |     3848 | 2024-08-02 | paiN              | L   | 0.107      | -            | -                | -                | -         |    -0.61 | doc, gafolo, koala, pepe, rdnzao |
|           19 |     3877 | 2024-08-01 | Hype              | W   | 0.101      | -            | -                | -                | -         |     0.19 | doc, gafolo, koala, pepe, rdnzao |
|           18 |     3884 | 2024-08-01 | paiN              | L   | 0.100      | -            | -                | -                | -         |    -0.57 | doc, gafolo, koala, pepe, rdnzao |
|           17 |     3917 | 2024-07-31 | MIBR              | L   | 0.095      | -            | -                | -                | -         |    -0.41 | doc, gafolo, koala, pepe, rdnzao |
|           16 |     3922 | 2024-07-31 | Solid             | W   | 0.095      | -            | -                | -                | -         |     0.12 | doc, gafolo, koala, pepe, rdnzao |
|           15 |     3958 | 2024-07-30 | Hype              | W   | 0.089      | -            | -                | -                | -         |     0.17 | doc, gafolo, koala, pepe, rdnzao |
|           14 |     4037 | 2024-07-28 | Bad News Chickens | W   | 0.075      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, pepe, rdnzao |
|           13 |     4083 | 2024-07-26 | Imperial          | L   | 0.062      | -            | -                | -                | -         |    -1.17 | doc, gafolo, koala, pepe, rdnzao |
|           12 |     4110 | 2024-07-25 | BESTIA            | W   | 0.056      | -            | -                | -                | -         |     0.51 | doc, gafolo, koala, pepe, rdnzao |
|           11 |     4114 | 2024-07-25 | Patins da Ferrari | W   | 0.056      | -            | -                | -                | -         |     0.02 | doc, gafolo, koala, pepe, rdnzao |
|           10 |     4160 | 2024-07-24 | Bad News Chickens | W   | 0.048      | -            | -                | -                | -         |     0.02 | doc, gafolo, koala, pepe, rdnzao |
|            9 |     4165 | 2024-07-24 | Yawara            | W   | 0.047      | -            | -                | -                | -         |     0.07 | doc, gafolo, koala, pepe, rdnzao |
|            8 |     4187 | 2024-07-23 | ODDIK             | L   | 0.043      | -            | -                | -                | -         |    -1.13 | doc, gafolo, koala, pepe, rdnzao |
|            7 |     4191 | 2024-07-23 | W7M               | W   | 0.042      | -            | -                | -                | -         |     0.04 | doc, gafolo, koala, pepe, rdnzao |
|            6 |     4275 | 2024-07-20 | Fluxo             | L   | 0.022      | -            | -                | -                | -         |    -0.49 | doc, gafolo, koala, pepe, rdnzao |
|            5 |     4327 | 2024-07-19 | Hype              | W   | 0.014      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, pepe, rdnzao |
|            4 |     4354 | 2024-07-18 | Fluxo             | L   | 0.009      | -            | -                | -                | -         |    -0.20 | doc, gafolo, koala, pepe, rdnzao |
|            3 |     4358 | 2024-07-18 | Fluxo             | L   | 0.009      | -            | -                | -                | -         |    -0.19 | doc, gafolo, koala, pepe, rdnzao |
|            2 |     4419 | 2024-07-17 | ODDIK             | W   | 0.002      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |
|            1 |     4431 | 2024-07-17 | ODDIK             | W   | 0.002      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, pepe, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,021.30)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.964 | $7,500.00      | $7,226.71       |
| 2024-11-30 |      0.910 | $1,500.00      | $1,364.26       |
| 2024-11-24 |      0.868 | $3,940.00      | $3,421.57       |
| 2024-11-09 |      0.770 | $4,000.00      | $3,078.98       |
| 2024-10-27 |      0.682 | $10,650.00     | $7,263.54       |
| 2024-10-20 |      0.635 | $2,000.00      | $1,270.83       |
| 2024-09-04 |      0.330 | $1,500.00      | $494.49         |
| 2024-08-16 |      0.202 | $9,000.00      | $1,819.13       |
| 2024-08-02 |      0.109 | $750.00        | $81.79          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
