### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, AZUWU, cej0t, MUTiRiS, story<br />
Global Rank: [50](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [34]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  988.1<br />
<br />
Final Rank Value (988.1) = Starting Rank Value (967.6) + Head To Head Adjustments (20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.460[<sup>1</sup>](#table2)
- Bounty Collected: 0.417[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.248[<sup>2</sup>](#table1)

The average of these factors is 0.304<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 967.6
- 400 + ( ( 0.304 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 967.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      522 | 2025-05-23 | Sashi             | L   | 0.901      | -            | -                | -                | -         |   -13.79 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           30 |      657 | 2025-05-17 | ENCE              | L   | 0.859      | -            | -                | -                | -         |   -10.02 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           29 |      676 | 2025-05-16 | FAVBET            | W   | 0.853      | 0.435        | 0.008 (0.003)    | 0.742 (0.275)    | 0 (0.000) |    10.17 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           28 |     1085 | 2025-05-01 | Chinggis Warriors | L   | 0.751      | -            | -                | -                | -         |   -10.73 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           27 |     1122 | 2025-04-30 | JiJieHao          | L   | 0.744      | -            | -                | -                | -         |   -10.83 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           26 |     1269 | 2025-04-22 | MIBR              | L   | 0.692      | -            | -                | -                | -         |    -3.60 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           25 |     1282 | 2025-04-21 | Falcons           | L   | 0.685      | -            | -                | -                | -         |    -0.34 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           24 |     1384 | 2025-04-16 | ENCE              | L   | 0.653      | -            | -                | -                | -         |    -7.65 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           23 |     1396 | 2025-04-16 | GamerLegion       | W   | 0.651      | 0.143        | 0.390 (0.036)    | 0.395 (0.037)    | 0 (0.000) |    19.34 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           22 |     1414 | 2025-04-15 | 9 Pandas          | L   | 0.645      | -            | -                | -                | -         |   -12.15 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           21 |     1431 | 2025-04-14 | B8                | W   | 0.640      | 0.143        | 0.161 (0.015)    | 0.803 (0.073)    | 0 (0.000) |    16.92 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           20 |     1439 | 2025-04-14 | BetBoom           | L   | 0.638      | -            | -                | -                | -         |    -7.13 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           19 |     2537 | 2025-03-10 | GamerLegion       | L   | 0.406      | -            | -                | -                | -         |    -0.62 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           18 |     2592 | 2025-03-09 | G2                | L   | 0.399      | -            | -                | -                | -         |    -0.41 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           17 |     2639 | 2025-03-08 | Spirit            | L   | 0.394      | -            | -                | -                | -         |    -0.12 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           16 |     2723 | 2025-03-07 | Natus Vincere     | W   | 0.386      | 1.000        | 0.392 (0.151)    | 0.394 (0.152)    | 1 (0.386) |    11.74 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           15 |     2863 | 2025-03-03 | M80               | W   | 0.360      | 0.143        | 0.055 (0.003)    | 0.247 (0.013)    | 1 (0.360) |     4.79 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           14 |     2884 | 2025-03-02 | FURIA             | W   | 0.353      | 0.143        | 0.339 (0.017)    | 0.435 (0.022)    | 1 (0.353) |    10.86 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           13 |     2918 | 2025-03-01 | HEROIC            | W   | 0.346      | 0.143        | 0.435 (0.021)    | 0.712 (0.035)    | 1 (0.346) |    10.52 | Ag1l, AZUWU, cej0t, MUTiRiS, story |
|           12 |     3146 | 2025-02-21 | FaZe              | L   | 0.294      | -            | -                | -                | -         |    -0.13 | Ag1l, MUTiRiS, roman, Shr, story   |
|           11 |     3249 | 2025-02-18 | 3DMAX             | W   | 0.272      | 1.000        | 0.265 (0.072)    | 0.429 (0.117)    | 1 (0.272) |     8.22 | Ag1l, MUTiRiS, roman, Shr, story   |
|           10 |     3260 | 2025-02-17 | Complexity        | W   | 0.267      | 1.000        | 0.174 (0.046)    | 0.432 (0.115)    | 1 (0.267) |     7.03 | Ag1l, MUTiRiS, roman, Shr, story   |
|            9 |     3286 | 2025-02-16 | FlyQuest          | W   | 0.260      | 1.000        | 0.133 (0.035)    | 0.317 (0.082)    | 1 (0.260) |     6.33 | Ag1l, MUTiRiS, roman, Shr, story   |
|            8 |     3314 | 2025-02-15 | Astralis          | L   | 0.253      | -            | -                | -                | -         |    -0.36 | Ag1l, MUTiRiS, roman, Shr, story   |
|            7 |     3356 | 2025-02-14 | FaZe              | L   | 0.245      | -            | -                | -                | -         |    -0.10 | Ag1l, MUTiRiS, roman, Shr, story   |
|            6 |     3614 | 2025-02-06 | 500               | L   | 0.192      | -            | -                | -                | -         |    -3.89 | Ag1l, MUTiRiS, roman, Shr, story   |
|            5 |     3644 | 2025-02-05 | Eco Warriors      | W   | 0.186      | -            | -                | -                | -         |     0.82 | Ag1l, MUTiRiS, roman, Shr, story   |
|            4 |     3649 | 2025-02-05 | BC.Game           | L   | 0.185      | -            | -                | -                | -         |    -3.73 | Ag1l, MUTiRiS, roman, Shr, story   |
|            3 |     3718 | 2025-01-30 | Virtus.pro        | L   | 0.146      | -            | -                | -                | -         |    -0.16 | Ag1l, MUTiRiS, roman, Shr, story   |
|            2 |     3729 | 2025-01-29 | GamerLegion       | L   | 0.139      | -            | -                | -                | -         |    -0.16 | Ag1l, MUTiRiS, roman, Shr, story   |
|            1 |     3965 | 2025-01-15 | BIG               | L   | 0.046      | -            | -                | -                | -         |    -0.27 | Ag1l, MUTiRiS, roman, Shr, story   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,407.21)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.867 | $2,000.00      | $1,734.03       |
| 2025-04-27 |      0.725 | $4,000.00      | $2,900.73       |
| 2025-03-16 |      0.447 | $20,500.00     | $9,158.87       |
| 2025-02-23 |      0.308 | $62,500.00     | $19,229.24      |
| 2025-01-31 |      0.154 | $2,500.00      | $384.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
