### Roster Details<br />
Team Name: 3DMAX<br />
Roster: Djoko, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [14](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1486.5<br />
<br />
Final Rank Value (1486.5) = Starting Rank Value (1533.3) + Head To Head Adjustments (-46.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.717[<sup>1</sup>](#table2)
- Bounty Collected: 0.523[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.867[<sup>2</sup>](#table1)

The average of these factors is 0.584<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1533.3
- 400 + ( ( 0.584 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1533.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |        5 | 2025-02-02 | BIG            | W   | 1.000      | 1.000        | 0.352 (0.352)    | 0.608 (0.608)    | 1 (1.000) |    10.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           52 |       26 | 2025-02-01 | Vitality       | L   | 1.000      | -            | -                | -                | -         |    -4.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           51 |       38 | 2025-01-30 | MIBR           | W   | 1.000      | 0.143        | -                | 0.649 (0.093)    | 1 (1.000) |    13.11 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           50 |       53 | 2025-01-29 | FlyQuest       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     8.04 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           49 |      343 | 2025-01-14 | HEROIC         | L   | 1.000      | -            | -                | -                | -         |   -25.16 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           48 |      673 | 2024-12-06 | MOUZ           | L   | 0.810      | -            | -                | -                | -         |    -5.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           47 |      701 | 2024-12-05 | G2             | L   | 0.803      | -            | -                | -                | -         |    -1.67 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           46 |      713 | 2024-12-05 | paiN           | W   | 0.798      | 1.000        | 0.328 (0.262)    | 0.799 (0.638)    | 1 (0.798) |    10.42 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           45 |      727 | 2024-12-04 | MIBR           | L   | 0.797      | -            | -                | -                | -         |   -15.44 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           44 |      987 | 2024-11-22 | G2             | W   | 0.711      | 0.143        | 1.000 (0.102)    | -                | 1 (0.711) |    21.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           43 |     1005 | 2024-11-21 | Eternal Fire   | W   | 0.705      | 0.143        | 0.714 (0.072)    | -                | 1 (0.705) |    17.12 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           42 |     1014 | 2024-11-21 | TSM            | W   | 0.704      | -            | -                | -                | 1 (0.704) |     0.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           41 |     1409 | 2024-11-03 | OG             | W   | 0.586      | 0.898        | 0.166 (0.087)    | 0.257 (0.135)    | 1 (0.586) |     0.95 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           40 |     1424 | 2024-11-02 | The MongolZ    | L   | 0.581      | -            | -                | -                | -         |    -1.85 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           39 |     1561 | 2024-10-26 | BESTIA         | W   | 0.535      | 0.477        | 0.160 (0.041)    | 0.887 (0.226)    | -         |     1.98 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           38 |     1640 | 2024-10-21 | OG             | W   | 0.501      | 0.477        | 0.166 (0.040)    | -                | -         |     0.75 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           37 |     1648 | 2024-10-21 | Falcons        | W   | 0.498      | -            | -                | -                | -         |     0.64 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           36 |     1684 | 2024-10-19 | Nemiga         | L   | 0.487      | -            | -                | -                | -         |   -12.29 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           35 |     1712 | 2024-10-18 | SAW            | W   | 0.480      | 0.500        | 0.231 (0.055)    | -                | -         |     2.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           34 |     1737 | 2024-10-17 | Sashi          | W   | 0.474      | 0.500        | -                | 0.638 (0.151)    | -         |     0.92 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           33 |     1771 | 2024-10-16 | Nemiga         | L   | 0.467      | -            | -                | -                | -         |   -12.14 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           32 |     1796 | 2024-10-15 | TSM            | W   | 0.461      | -            | -                | -                | -         |     0.40 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           31 |     1835 | 2024-10-12 | Spirit Academy | L   | 0.440      | -            | -                | -                | -         |   -12.79 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           30 |     1858 | 2024-10-10 | CYBERSHOKE     | W   | 0.427      | 0.435        | -                | 0.565 (0.105)    | -         |     0.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           29 |     1989 | 2024-10-06 | Passion UA     | L   | 0.399      | -            | -                | -                | -         |   -11.30 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           28 |     2026 | 2024-10-05 | PARIVISION     | W   | 0.392      | -            | -                | -                | -         |     0.30 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           27 |     2088 | 2024-10-03 | Rhyno          | W   | 0.380      | -            | -                | -                | -         |     0.17 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           26 |     2227 | 2024-09-29 | SAW            | L   | 0.353      | -            | -                | -                | -         |    -9.35 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           25 |     2254 | 2024-09-28 | B8             | L   | 0.347      | -            | -                | -                | -         |    -9.89 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           24 |     2268 | 2024-09-28 | BetBoom        | L   | 0.345      | -            | -                | -                | -         |    -9.93 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           23 |     2299 | 2024-09-27 | 9z             | W   | 0.340      | -            | -                | -                | -         |     0.34 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           22 |     2311 | 2024-09-27 | Nemiga         | W   | 0.339      | -            | -                | -                | -         |     1.52 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           21 |     2319 | 2024-09-27 | CYBERSHOKE     | W   | 0.338      | -            | -                | -                | -         |     0.21 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           20 |     2349 | 2024-09-26 | Aurora         | W   | 0.333      | -            | -                | -                | -         |     0.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           19 |     2370 | 2024-09-26 | Monte          | W   | 0.331      | -            | -                | -                | -         |     0.59 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           18 |     2413 | 2024-09-25 | Zero Tenacity  | W   | 0.325      | 0.435        | -                | 0.715 (0.101)    | -         |     0.63 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           17 |     2466 | 2024-09-24 | Zero Tenacity  | W   | 0.318      | -            | -                | -                | -         |     0.62 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           16 |     2787 | 2024-09-13 | Zero Tenacity  | L   | 0.246      | -            | -                | -                | -         |    -7.28 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           15 |     2923 | 2024-09-08 | The MongolZ    | L   | 0.212      | -            | -                | -                | -         |    -0.83 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           14 |     2952 | 2024-09-07 | Wildcard       | W   | 0.206      | 0.889        | 0.269 (0.049)    | 0.701 (0.128)    | 1 (0.206) |     1.82 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           13 |     2970 | 2024-09-06 | Spirit         | L   | 0.200      | -            | -                | -                | -         |    -0.43 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           12 |     2987 | 2024-09-06 | 9z             | W   | 0.199      | -            | -                | -                | 1 (0.199) |     0.19 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           11 |     3013 | 2024-09-05 | G2             | L   | 0.193      | -            | -                | -                | -         |    -0.45 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|           10 |     3059 | 2024-09-04 | The MongolZ    | W   | 0.185      | 0.889        | 1.000 (0.165)    | 0.716 (0.118)    | -         |     5.15 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            9 |     3316 | 2024-08-27 | Falcons        | L   | 0.132      | -            | -                | -                | -         |    -1.18 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            8 |     3368 | 2024-08-26 | Falcons        | L   | 0.127      | -            | -                | -                | -         |    -3.90 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            7 |     3387 | 2024-08-26 | fnatic         | W   | 0.126      | -            | -                | -                | -         |     0.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            6 |     3726 | 2024-08-16 | SINNERS        | L   | 0.058      | -            | -                | -                | -         |    -1.73 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            5 |     3801 | 2024-08-13 | Zero Tenacity  | W   | 0.041      | -            | -                | -                | -         |     0.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            4 |     3849 | 2024-08-12 | Nemiga         | L   | 0.034      | -            | -                | -                | -         |    -0.91 | Djoko, Ex3rcice, Graviti, Maka, wasiNk |
|            3 |     3932 | 2024-08-09 | PARIVISION     | W   | 0.013      | -            | -                | -                | -         |     0.01 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            2 |     3956 | 2024-08-08 | Falcons        | L   | 0.006      | -            | -                | -                | -         |    -0.06 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |
|            1 |     3996 | 2024-08-07 | GUN5           | W   | 0.000      | -            | -                | -                | -         |     0.00 | Djoko, Ex3rcice, Graviti, Lucky, Maka  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($76,104.29)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.865 | $20,000.00     | $17,299.34      |
| 2024-11-03 |      0.587 | $70,000.00     | $41,103.03      |
| 2024-10-20 |      0.493 | $10,000.00     | $4,928.13       |
| 2024-10-13 |      0.447 | $2,000.00      | $894.12         |
| 2024-10-06 |      0.401 | $5,000.00      | $2,003.63       |
| 2024-09-28 |      0.347 | $5,000.00      | $1,734.40       |
| 2024-09-26 |      0.333 | $12,500.00     | $4,165.32       |
| 2024-09-22 |      0.307 | $12,000.00     | $3,687.49       |
| 2024-09-14 |      0.254 | $1,000.00      | $253.59         |
| 2024-08-09 |      0.014 | $2,500.00      | $35.25          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
