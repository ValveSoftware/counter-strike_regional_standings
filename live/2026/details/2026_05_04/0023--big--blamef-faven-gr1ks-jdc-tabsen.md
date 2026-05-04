### Roster Details<br />
Team Name: BIG<br />
Roster: blameF, faveN, gr1ks, JDC, tabseN<br />
Global Rank: [23](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [18]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1445.3<br />
<br />
Final Rank Value (1445.3) = Starting Rank Value (1496.9) + Head To Head Adjustments (-51.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.571[<sup>1</sup>](#table2)
- Bounty Collected: 0.442[<sup>2</sup>](#table1)
- Opponent Network: 0.357[<sup>2</sup>](#table1)
- LAN Wins: 0.996[<sup>2</sup>](#table1)

The average of these factors is 0.591<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1496.9
- 400 + ( ( 0.591 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1496.9


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
|           53 |      213 | 2026-04-27 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -20.18 | blameF, faveN, gr1ks, prosus, tabseN |
|           52 |      282 | 2026-04-26 | SPARTA            | W   | 1.000      | 0.435        | 0.063 (0.027)    | 0.768 (0.334)    | -         |     4.79 | blameF, faveN, gr1ks, JDC, tabseN    |
|           51 |      298 | 2026-04-25 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -18.20 | blameF, faveN, gr1ks, JDC, tabseN    |
|           50 |      350 | 2026-04-25 | Sharks            | W   | 1.000      | 0.471        | 0.080 (0.038)    | -                | 1 (1.000) |     9.00 | blameF, faveN, gr1ks, JDC, tabseN    |
|           49 |      374 | 2026-04-24 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -16.05 | blameF, faveN, gr1ks, JDC, tabseN    |
|           48 |      383 | 2026-04-24 | Acend             | W   | 1.000      | 0.435        | -                | 0.759 (0.330)    | -         |     4.45 | blameF, faveN, gr1ks, JDC, tabseN    |
|           47 |      403 | 2026-04-23 | 100 Thieves       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.56 | blameF, faveN, gr1ks, JDC, tabseN    |
|           46 |      667 | 2026-04-10 | Nemesis           | L   | 1.000      | -            | -                | -                | -         |   -21.17 | blameF, faveN, gr1ks, JDC, tabseN    |
|           45 |      675 | 2026-04-10 | PsychoFace        | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     3.65 | blameF, faveN, gr1ks, JDC, tabseN    |
|           44 |      695 | 2026-04-09 | Ursa              | W   | 1.000      | 0.435        | -                | 0.956 (0.416)    | -         |     2.85 | blameF, faveN, gr1ks, JDC, tabseN    |
|           43 |      715 | 2026-04-08 | Bebop             | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     2.09 | blameF, faveN, gr1ks, JDC, tabseN    |
|           42 |      816 | 2026-04-05 | FaZe              | W   | 1.000      | 0.396        | 0.563 (0.223)    | -                | 1 (1.000) |    14.20 | blameF, faveN, gr1ks, JDC, tabseN    |
|           41 |      827 | 2026-04-05 | magic             | W   | 1.000      | 0.396        | 0.063 (0.025)    | 0.784 (0.311)    | 1 (1.000) |     7.81 | blameF, faveN, gr1ks, JDC, tabseN    |
|           40 |      841 | 2026-04-05 | ex-Zero Tenacity  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.89 | blameF, faveN, gr1ks, JDC, tabseN    |
|           39 |      885 | 2026-04-04 | Betclic           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.33 | blameF, faveN, gr1ks, JDC, tabseN    |
|           38 |      897 | 2026-04-04 | Luminous          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.09 | blameF, faveN, gr1ks, JDC, tabseN    |
|           37 |     1441 | 2026-03-29 | OG                | L   | 0.959      | -            | -                | -                | -         |   -25.08 | blameF, faveN, gr1ks, JDC, tabseN    |
|           36 |     1447 | 2026-03-29 | SINNERS           | W   | 0.959      | 0.341        | 0.160 (0.052)    | -                | 1 (0.959) |    13.70 | blameF, faveN, gr1ks, JDC, tabseN    |
|           35 |     1456 | 2026-03-29 | JiJieHao          | L   | 0.958      | -            | -                | -                | -         |   -24.78 | blameF, faveN, gr1ks, JDC, tabseN    |
|           34 |     1600 | 2026-03-26 | SINNERS           | L   | 0.941      | -            | -                | -                | -         |   -17.64 | blameF, faveN, gr1ks, JDC, tabseN    |
|           33 |     1617 | 2026-03-26 | HOTU              | W   | 0.939      | 0.435        | 0.102 (0.042)    | -                | 1 (0.939) |     8.29 | blameF, faveN, gr1ks, JDC, tabseN    |
|           32 |     1640 | 2026-03-25 | Gentle Mates      | W   | 0.935      | 0.435        | 0.100 (0.040)    | -                | 1 (0.935) |    10.25 | blameF, faveN, gr1ks, JDC, tabseN    |
|           31 |     1655 | 2026-03-25 | MOUZ NXT          | W   | 0.934      | 0.435        | -                | 1.000 (0.406)    | -         |     4.28 | blameF, faveN, gr1ks, JDC, tabseN    |
|           30 |     1949 | 2026-03-20 | K27               | L   | 0.901      | -            | -                | -                | -         |   -17.83 | blameF, faveN, gr1ks, JDC, tabseN    |
|           29 |     1974 | 2026-03-20 | FAVBET            | W   | 0.899      | -            | -                | -                | -         |     2.28 | blameF, faveN, gr1ks, JDC, tabseN    |
|           28 |     1998 | 2026-03-19 | CYBERSHOKE        | W   | 0.894      | -            | -                | -                | -         |     4.07 | blameF, faveN, gr1ks, JDC, tabseN    |
|           27 |     2036 | 2026-03-18 | ex-Zero Tenacity  | W   | 0.888      | -            | -                | -                | -         |     0.79 | blameF, faveN, gr1ks, JDC, tabseN    |
|           26 |     2517 | 2026-03-08 | Nemesis           | L   | 0.821      | -            | -                | -                | -         |   -19.62 | blameF, faveN, gr1ks, JDC, tabseN    |
|           25 |     2586 | 2026-03-07 | K27               | W   | 0.814      | 0.435        | 0.127 (0.045)    | 0.860 (0.304)    | -         |     8.07 | blameF, faveN, gr1ks, JDC, tabseN    |
|           24 |     2678 | 2026-03-05 | ECSTATIC          | W   | 0.801      | 0.435        | 0.075 (0.026)    | -                | -         |     5.26 | blameF, faveN, gr1ks, JDC, tabseN    |
|           23 |     2705 | 2026-03-05 | AM                | W   | 0.798      | -            | -                | -                | -         |     3.84 | blameF, faveN, gr1ks, JDC, tabseN    |
|           22 |     2713 | 2026-03-04 | Johnny Speeds     | W   | 0.795      | 0.435        | 0.073 (0.025)    | 0.939 (0.324)    | -         |     5.33 | blameF, faveN, gr1ks, JDC, tabseN    |
|           21 |     2748 | 2026-03-04 | illwill           | W   | 0.792      | 0.435        | -                | 0.791 (0.272)    | -         |     6.65 | blameF, faveN, gr1ks, JDC, tabseN    |
|           20 |     2767 | 2026-03-03 | Leo               | W   | 0.788      | -            | -                | -                | -         |     0.92 | blameF, faveN, gr1ks, JDC, tabseN    |
|           19 |     4173 | 2026-01-30 | Nemiga            | L   | 0.574      | -            | -                | -                | -         |   -12.45 | blameF, gr1ks, JDC, prosus, tabseN   |
|           18 |     4192 | 2026-01-29 | BET-M             | W   | 0.568      | -            | -                | -                | -         |     4.00 | blameF, gr1ks, JDC, prosus, tabseN   |
|           17 |     4220 | 2026-01-28 | ARCRED            | W   | 0.560      | -            | -                | -                | -         |     3.04 | blameF, gr1ks, JDC, prosus, tabseN   |
|           16 |     4292 | 2026-01-25 | HAVU              | W   | 0.539      | -            | -                | -                | -         |     1.20 | blameF, faveN, gr1ks, JDC, tabseN    |
|           15 |     4316 | 2026-01-24 | Alliance          | W   | 0.534      | -            | -                | -                | -         |     6.54 | blameF, faveN, gr1ks, JDC, tabseN    |
|           14 |     4334 | 2026-01-24 | Johnny Speeds     | W   | 0.532      | -            | -                | -                | -         |     4.95 | blameF, faveN, gr1ks, JDC, tabseN    |
|           13 |     4392 | 2026-01-23 | Luleflames        | W   | 0.525      | -            | -                | -                | -         |     0.04 | blameF, faveN, gr1ks, JDC, tabseN    |
|           12 |     4395 | 2026-01-23 | Lilmix            | L   | 0.525      | -            | -                | -                | -         |   -15.47 | blameF, faveN, gr1ks, JDC, tabseN    |
|           11 |     4521 | 2026-01-18 | Betclic           | W   | 0.494      | -            | -                | -                | -         |     3.04 | blameF, faveN, gr1ks, JDC, tabseN    |
|           10 |     4527 | 2026-01-18 | Rebels            | W   | 0.493      | -            | -                | -                | -         |     2.18 | blameF, faveN, gr1ks, JDC, tabseN    |
|            9 |     4567 | 2026-01-17 | MANA              | W   | 0.487      | -            | -                | -                | -         |     0.73 | blameF, faveN, gr1ks, JDC, tabseN    |
|            8 |     4608 | 2026-01-16 | HYPERSPIRIT       | W   | 0.481      | -            | -                | -                | -         |     0.95 | blameF, faveN, gr1ks, JDC, tabseN    |
|            7 |     4624 | 2026-01-16 | EXSAD             | W   | 0.480      | -            | -                | -                | -         |     0.04 | blameF, faveN, gr1ks, JDC, tabseN    |
|            6 |     4985 | 2025-12-16 | Lavked            | L   | 0.273      | -            | -                | -                | -         |    -8.31 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            5 |     4996 | 2025-12-14 | magic             | W   | 0.261      | -            | -                | -                | -         |     1.01 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            4 |     4998 | 2025-12-14 | 9INE              | W   | 0.260      | -            | -                | -                | -         |     1.98 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            3 |     5005 | 2025-12-13 | Oramond           | W   | 0.254      | -            | -                | -                | -         |     0.23 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            2 |     5023 | 2025-12-12 | Sangal            | W   | 0.247      | -            | -                | -                | -         |     0.14 | FreeZe, gr1ks, JDC, prosus, tabseN   |
|            1 |     5504 | 2025-11-21 | Leo               | L   | 0.107      | -            | -                | -                | -         |    -3.27 | FreeZe, gr1ks, JDC, prosus, tabseN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($82,933.53)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-04-26 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-04-10 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-04-05 |      1.000 | $12,000.00     | $12,000.00      |
| 2026-03-26 |      0.941 | $10,000.00     | $9,411.81       |
| 2026-03-20 |      0.901 | $10,000.00     | $9,008.56       |
| 2026-03-05 |      0.801 | $22,000.00     | $17,616.18      |
| 2026-01-25 |      0.539 | $7,000.00      | $3,776.06       |
| 2026-01-18 |      0.494 | $5,818.00      | $2,875.44       |
| 2025-12-14 |      0.261 | $22,000.00     | $5,745.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
