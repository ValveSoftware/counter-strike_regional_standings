### Roster Details<br />
Team Name: BIG<br />
Roster: blameF, faveN, gr1ks, JDC, tabseN<br />
Global Rank: [28](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [20]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1416.5<br />
<br />
Final Rank Value (1416.5) = Starting Rank Value (1383.9) + Head To Head Adjustments (32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.504[<sup>1</sup>](#table2)
- Bounty Collected: 0.417[<sup>2</sup>](#table1)
- Opponent Network: 0.300[<sup>2</sup>](#table1)
- LAN Wins: 0.845[<sup>2</sup>](#table1)

The average of these factors is 0.516<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1383.9
- 400 + ( ( 0.516 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1383.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |     1175 | 2026-04-27 | Nemiga            | L   | 0.966      | -            | -                | -                | -         |   -18.87 | blameF, faveN, gr1ks, prosus, tabseN |
|           51 |     1248 | 2026-04-26 | SPARTA            | W   | 0.958      | 0.435        | 0.038 (0.016)    | 0.828 (0.345)    | -         |     5.97 | blameF, faveN, gr1ks, JDC, tabseN    |
|           50 |     1264 | 2026-04-25 | Ninjas in Pyjamas | L   | 0.955      | -            | -                | -                | -         |   -15.42 | blameF, faveN, gr1ks, JDC, tabseN    |
|           49 |     1320 | 2026-04-25 | Sharks            | W   | 0.952      | 0.471        | 0.060 (0.027)    | -                | 1 (0.952) |    10.70 | blameF, faveN, gr1ks, JDC, tabseN    |
|           48 |     1360 | 2026-04-24 | HEROIC            | L   | 0.946      | -            | -                | -                | -         |   -14.74 | blameF, faveN, gr1ks, JDC, tabseN    |
|           47 |     1369 | 2026-04-24 | Acend             | W   | 0.945      | 0.435        | -                | 0.828 (0.340)    | -         |     6.67 | blameF, faveN, gr1ks, JDC, tabseN    |
|           46 |     1389 | 2026-04-23 | 100 Thieves       | W   | 0.940      | 0.471        | -                | 0.674 (0.298)    | 1 (0.940) |    10.34 | blameF, faveN, gr1ks, JDC, tabseN    |
|           45 |     1653 | 2026-04-10 | Nemesis           | L   | 0.854      | -            | -                | -                | -         |   -17.48 | blameF, faveN, gr1ks, JDC, tabseN    |
|           44 |     1661 | 2026-04-10 | PsychoFace        | W   | 0.852      | 0.435        | 0.036 (0.013)    | 1.000 (0.370)    | -         |     3.98 | blameF, faveN, gr1ks, JDC, tabseN    |
|           43 |     1681 | 2026-04-09 | Ursa              | W   | 0.846      | 0.435        | -                | 0.962 (0.354)    | -         |     2.53 | blameF, faveN, gr1ks, JDC, tabseN    |
|           42 |     1701 | 2026-04-08 | Bebop             | W   | 0.841      | 0.435        | -                | 0.757 (0.277)    | -         |     1.66 | blameF, faveN, gr1ks, JDC, tabseN    |
|           41 |     1802 | 2026-04-05 | FaZe              | W   | 0.821      | 0.396        | 0.390 (0.127)    | -                | 1 (0.821) |    14.18 | blameF, faveN, gr1ks, JDC, tabseN    |
|           40 |     1813 | 2026-04-05 | magic             | W   | 0.820      | 0.396        | 0.238 (0.077)    | 0.739 (0.240)    | 1 (0.820) |    17.32 | blameF, faveN, gr1ks, JDC, tabseN    |
|           39 |     1827 | 2026-04-05 | ex-Zero Tenacity  | W   | 0.819      | 0.396        | -                | 0.815 (0.265)    | 1 (0.819) |     0.94 | blameF, faveN, gr1ks, JDC, tabseN    |
|           38 |     1871 | 2026-04-04 | Betclic           | W   | 0.814      | -            | -                | -                | 1 (0.814) |     7.28 | blameF, faveN, gr1ks, JDC, tabseN    |
|           37 |     1883 | 2026-04-04 | Luminous          | W   | 0.814      | -            | -                | -                | 1 (0.814) |     0.09 | blameF, faveN, gr1ks, JDC, tabseN    |
|           36 |     2427 | 2026-03-29 | OG                | L   | 0.772      | -            | -                | -                | -         |   -17.36 | blameF, faveN, gr1ks, JDC, tabseN    |
|           35 |     2433 | 2026-03-29 | SINNERS           | W   | 0.772      | 0.341        | 0.119 (0.031)    | -                | 1 (0.772) |    12.59 | blameF, faveN, gr1ks, JDC, tabseN    |
|           34 |     2442 | 2026-03-29 | JiJieHao          | L   | 0.771      | -            | -                | -                | -         |   -15.06 | blameF, faveN, gr1ks, JDC, tabseN    |
|           33 |     2586 | 2026-03-26 | SINNERS           | L   | 0.755      | -            | -                | -                | -         |   -12.36 | blameF, faveN, gr1ks, JDC, tabseN    |
|           32 |     2603 | 2026-03-26 | HOTU              | W   | 0.753      | 0.435        | 0.070 (0.023)    | -                | 1 (0.753) |    11.28 | blameF, faveN, gr1ks, JDC, tabseN    |
|           31 |     2626 | 2026-03-25 | Gentle Mates      | W   | 0.748      | 0.435        | 0.145 (0.047)    | -                | 1 (0.748) |    12.42 | blameF, faveN, gr1ks, JDC, tabseN    |
|           30 |     2641 | 2026-03-25 | MOUZ NXT          | W   | 0.747      | 0.435        | -                | 0.814 (0.264)    | -         |     4.44 | blameF, faveN, gr1ks, JDC, tabseN    |
|           29 |     2935 | 2026-03-20 | K27               | L   | 0.714      | -            | -                | -                | -         |   -11.72 | blameF, faveN, gr1ks, JDC, tabseN    |
|           28 |     2960 | 2026-03-20 | FAVBET            | W   | 0.712      | -            | -                | -                | -         |     1.94 | blameF, faveN, gr1ks, JDC, tabseN    |
|           27 |     2984 | 2026-03-19 | CYBERSHOKE        | W   | 0.708      | -            | -                | -                | -         |     5.36 | blameF, faveN, gr1ks, JDC, tabseN    |
|           26 |     3022 | 2026-03-18 | ex-Zero Tenacity  | W   | 0.701      | 0.435        | -                | 0.815 (0.248)    | -         |     0.84 | blameF, faveN, gr1ks, JDC, tabseN    |
|           25 |     3503 | 2026-03-08 | Nemesis           | L   | 0.634      | -            | -                | -                | -         |   -13.72 | blameF, faveN, gr1ks, JDC, tabseN    |
|           24 |     3572 | 2026-03-07 | K27               | W   | 0.627      | 0.435        | 0.095 (0.026)    | -                | -         |     8.54 | blameF, faveN, gr1ks, JDC, tabseN    |
|           23 |     3664 | 2026-03-05 | ECSTATIC          | W   | 0.614      | -            | -                | -                | -         |     4.40 | blameF, faveN, gr1ks, JDC, tabseN    |
|           22 |     3691 | 2026-03-05 | AM                | W   | 0.612      | -            | -                | -                | -         |     5.55 | blameF, faveN, gr1ks, JDC, tabseN    |
|           21 |     3699 | 2026-03-04 | Johnny Speeds     | W   | 0.608      | 0.435        | 0.048 (0.013)    | -                | -         |     6.21 | blameF, faveN, gr1ks, JDC, tabseN    |
|           20 |     3734 | 2026-03-04 | illwill           | W   | 0.606      | -            | -                | -                | -         |     5.15 | blameF, faveN, gr1ks, JDC, tabseN    |
|           19 |     3753 | 2026-03-03 | Leo               | W   | 0.601      | -            | -                | -                | -         |     0.90 | blameF, faveN, gr1ks, JDC, tabseN    |
|           18 |     5159 | 2026-01-30 | Nemiga            | L   | 0.387      | -            | -                | -                | -         |    -7.35 | blameF, gr1ks, JDC, prosus, tabseN   |
|           17 |     5178 | 2026-01-29 | BET-M             | W   | 0.381      | -            | -                | -                | -         |     3.94 | blameF, gr1ks, JDC, prosus, tabseN   |
|           16 |     5206 | 2026-01-28 | ARCRED            | W   | 0.374      | -            | -                | -                | -         |     3.48 | blameF, gr1ks, JDC, prosus, tabseN   |
|           15 |     5278 | 2026-01-25 | HAVU              | W   | 0.353      | -            | -                | -                | -         |     1.13 | blameF, faveN, gr1ks, JDC, tabseN    |
|           14 |     5302 | 2026-01-24 | Alliance          | W   | 0.348      | -            | -                | -                | -         |     6.08 | blameF, faveN, gr1ks, JDC, tabseN    |
|           13 |     5320 | 2026-01-24 | Johnny Speeds     | W   | 0.346      | -            | -                | -                | -         |     4.31 | blameF, faveN, gr1ks, JDC, tabseN    |
|           12 |     5378 | 2026-01-23 | Luleflames        | W   | 0.338      | -            | -                | -                | -         |     0.04 | blameF, faveN, gr1ks, JDC, tabseN    |
|           11 |     5381 | 2026-01-23 | Lilmix            | L   | 0.338      | -            | -                | -                | -         |   -10.25 | blameF, faveN, gr1ks, JDC, tabseN    |
|           10 |     5507 | 2026-01-18 | Betclic           | W   | 0.308      | -            | -                | -                | -         |     2.83 | blameF, faveN, gr1ks, JDC, tabseN    |
|            9 |     5513 | 2026-01-18 | Rebels            | W   | 0.307      | -            | -                | -                | -         |     2.76 | blameF, faveN, gr1ks, JDC, tabseN    |
|            8 |     5553 | 2026-01-17 | MANA              | W   | 0.301      | -            | -                | -                | -         |     0.56 | blameF, faveN, gr1ks, JDC, tabseN    |
|            7 |     5594 | 2026-01-16 | HYPERSPIRIT       | W   | 0.295      | -            | -                | -                | -         |     0.81 | blameF, faveN, gr1ks, JDC, tabseN    |
|            6 |     5610 | 2026-01-16 | EXSAD             | W   | 0.294      | -            | -                | -                | -         |     0.04 | blameF, faveN, gr1ks, JDC, tabseN    |
|            5 |     5971 | 2025-12-16 | Lavked            | L   | 0.087      | -            | -                | -                | -         |    -2.56 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            4 |     5982 | 2025-12-14 | magic             | W   | 0.075      | -            | -                | -                | -         |     1.84 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            3 |     5984 | 2025-12-14 | 9INE              | W   | 0.073      | -            | -                | -                | -         |     0.17 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            2 |     5991 | 2025-12-13 | DragonClaw        | W   | 0.068      | -            | -                | -                | -         |     0.15 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            1 |     6009 | 2025-12-12 | Sangal            | W   | 0.060      | -            | -                | -                | -         |     0.04 | FreeZe, gr1ks, JDC, prosus, tabseN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,830.48)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-27 |      0.967 | $5,000.00      | $4,833.79       |
| 2026-04-26 |      0.961 | $7,500.00      | $7,207.06       |
| 2026-04-10 |      0.854 | $10,000.00     | $8,536.40       |
| 2026-04-05 |      0.821 | $12,000.00     | $9,853.79       |
| 2026-03-26 |      0.755 | $10,000.00     | $7,546.10       |
| 2026-03-20 |      0.714 | $10,000.00     | $7,142.85       |
| 2026-03-05 |      0.614 | $22,000.00     | $13,511.61      |
| 2026-01-30 |      0.388 | $5,000.00      | $1,938.85       |
| 2026-01-25 |      0.353 | $7,000.00      | $2,470.06       |
| 2026-01-18 |      0.308 | $5,818.00      | $1,789.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
