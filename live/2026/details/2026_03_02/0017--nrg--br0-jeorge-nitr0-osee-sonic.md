### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Jeorge, nitr0, oSee, Sonic<br />
Global Rank: [17](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [2]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  1434.1<br />
<br />
Final Rank Value (1434.1) = Starting Rank Value (1354.7) + Head To Head Adjustments (79.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.470[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.878[<sup>2</sup>](#table1)

The average of these factors is 0.505<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1354.7
- 400 + ( ( 0.505 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1354.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      928 | 2026-02-08 | Passion UA         | W   | 1.000      | 0.143        | 0.120 (0.017)    | -                | -         |    10.68 | br0, Jeorge, nitr0, oSee, Sonic  |
|           36 |      953 | 2026-02-07 | Voca               | W   | 1.000      | -            | -                | -                | -         |     3.03 | br0, Jeorge, nitr0, oSee, Sonic  |
|           35 |      993 | 2026-02-06 | Fisher College     | W   | 1.000      | -            | -                | -                | -         |     0.20 | br0, Jeorge, nitr0, oSee, Sonic  |
|           34 |     1102 | 2026-02-02 | Falcons            | L   | 1.000      | -            | -                | -                | -         |    -2.79 | br0, Jeorge, nitr0, oSee, Sonic  |
|           33 |     1137 | 2026-02-01 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -1.98 | br0, Jeorge, nitr0, oSee, Sonic  |
|           32 |     1204 | 2026-01-30 | Astralis           | W   | 0.993      | 0.783        | 0.468 (0.364)    | 0.375 (0.291)    | 1 (0.993) |    22.50 | br0, Jeorge, nitr0, oSee, Sonic  |
|           31 |     1253 | 2026-01-28 | B8                 | W   | 0.980      | 0.783        | 0.211 (0.162)    | 0.249 (0.191)    | 1 (0.980) |    17.00 | br0, Jeorge, nitr0, oSee, Sonic  |
|           30 |     1753 | 2026-01-11 | M80                | L   | 0.869      | -            | -                | -                | -         |   -15.52 | br0, Jeorge, nitr0, oSee, Sonic  |
|           29 |     1754 | 2026-01-11 | Marsborne          | W   | 0.868      | 0.396        | 0.050 (0.017)    | 0.556 (0.191)    | 1 (0.868) |     4.77 | br0, Jeorge, nitr0, oSee, Sonic  |
|           28 |     1763 | 2026-01-10 | Voca               | W   | 0.861      | 0.396        | -                | 0.448 (0.153)    | 1 (0.861) |     2.68 | br0, Jeorge, nitr0, oSee, Sonic  |
|           27 |     1769 | 2026-01-09 | Outfit 49          | W   | 0.856      | 0.396        | -                | 0.426 (0.145)    | 1 (0.856) |     0.51 | br0, Jeorge, nitr0, oSee, Sonic  |
|           26 |     1786 | 2026-01-04 | 9INE               | W   | 0.824      | 0.323        | 0.072 (0.019)    | 0.699 (0.186)    | 1 (0.824) |     9.90 | br0, Jeorge, nitr0, oSee, Sonic  |
|           25 |     1789 | 2026-01-04 | GamerLegion        | W   | 0.821      | 0.323        | 0.368 (0.098)    | 0.663 (0.176)    | 1 (0.821) |    18.65 | br0, Jeorge, nitr0, oSee, Sonic  |
|           24 |     1802 | 2026-01-04 | Voca               | W   | 0.820      | -            | -                | -                | 1 (0.820) |     2.89 | br0, Jeorge, nitr0, oSee, Sonic  |
|           23 |     1841 | 2026-01-03 | Marsborne          | W   | 0.814      | 0.323        | -                | 0.556 (0.146)    | 1 (0.814) |     6.01 | br0, Jeorge, nitr0, oSee, Sonic  |
|           22 |     1849 | 2026-01-03 | Kraken Seas        | W   | 0.813      | -            | -                | -                | 1 (0.813) |     0.12 | br0, Jeorge, nitr0, oSee, Sonic  |
|           21 |     2348 | 2025-11-27 | Imperial           | L   | 0.567      | -            | -                | -                | -         |   -12.07 | br0, daps, Jeorge, Sonic, XotiC  |
|           20 |     2359 | 2025-11-26 | fnatic             | L   | 0.560      | -            | -                | -                | -         |   -10.45 | br0, daps, Jeorge, Sonic, XotiC  |
|           19 |     2375 | 2025-11-25 | M80                | L   | 0.554      | -            | -                | -                | -         |    -9.64 | br0, daps, Jeorge, Sonic, XotiC  |
|           18 |     2396 | 2025-11-24 | FaZe               | W   | 0.549      | 0.624        | 0.591 (0.202)    | 0.358 (0.122)    | -         |    12.76 | br0, daps, Jeorge, Sonic, XotiC  |
|           17 |     2420 | 2025-11-24 | Ninjas in Pyjamas  | W   | 0.546      | 0.624        | 0.120 (0.041)    | 0.423 (0.144)    | -         |     6.65 | br0, daps, Jeorge, Sonic, XotiC  |
|           16 |     2534 | 2025-11-20 | Rave               | W   | 0.523      | -            | -                | -                | -         |     1.20 | br0, Jeorge, nitr0, Sonic, XotiC |
|           15 |     2793 | 2025-11-09 | M80                | W   | 0.450      | 0.333        | 0.109 (0.016)    | -                | -         |     6.30 | br0, Jeorge, nitr0, Sonic, XotiC |
|           14 |     2799 | 2025-11-09 | BC.Game            | W   | 0.447      | 0.333        | 0.224 (0.033)    | -                | -         |     9.54 | br0, Jeorge, nitr0, Sonic, XotiC |
|           13 |     2811 | 2025-11-09 | Mavrek             | W   | 0.446      | -            | -                | -                | -         |     0.09 | br0, Jeorge, nitr0, Sonic, XotiC |
|           12 |     2832 | 2025-11-08 | Reign Above        | W   | 0.442      | -            | -                | -                | -         |     0.20 | br0, Jeorge, nitr0, Sonic, XotiC |
|           11 |     2837 | 2025-11-08 | Outfit 49          | W   | 0.441      | -            | -                | -                | -         |     0.13 | br0, Jeorge, nitr0, Sonic, XotiC |
|           10 |     3306 | 2025-10-26 | Marsborne          | W   | 0.355      | -            | -                | -                | -         |     3.04 | br0, Jeorge, nitr0, Sonic, XotiC |
|            9 |     3334 | 2025-10-26 | Voca               | W   | 0.353      | -            | -                | -                | -         |     0.39 | br0, Jeorge, nitr0, Sonic, XotiC |
|            8 |     3371 | 2025-10-25 | SKDC               | W   | 0.347      | -            | -                | -                | -         |     0.05 | br0, Jeorge, nitr0, Sonic, XotiC |
|            7 |     4281 | 2025-09-30 | Fluxo              | L   | 0.180      | -            | -                | -                | -         |    -4.24 | br0, Jeorge, nitr0, Sonic, XotiC |
|            6 |     4320 | 2025-09-29 | Legacy             | L   | 0.173      | -            | -                | -                | -         |    -2.70 | br0, Jeorge, nitr0, Sonic, XotiC |
|            5 |     4370 | 2025-09-28 | GamerLegion        | L   | 0.166      | -            | -                | -                | -         |    -1.03 | br0, Jeorge, nitr0, Sonic, XotiC |
|            4 |     5144 | 2025-09-07 | Ninjas in Pyjamas  | W   | 0.029      | -            | -                | -                | -         |     0.39 | br0, Jeorge, nitr0, Sonic, XotiC |
|            3 |     5154 | 2025-09-07 | ODDIK              | W   | 0.027      | -            | -                | -                | -         |     0.18 | br0, Jeorge, nitr0, Sonic, XotiC |
|            2 |     5169 | 2025-09-06 | GameHunters        | W   | 0.022      | -            | -                | -                | -         |     0.01 | br0, Jeorge, nitr0, Sonic, XotiC |
|            1 |     5174 | 2025-09-06 | Radford University | W   | 0.021      | -            | -                | -                | -         |     0.00 | br0, Jeorge, nitr0, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,842.71)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-01-11 |      0.869 | $7,000.00      | $6,086.01       |
| 2026-01-04 |      0.824 | $5,000.00      | $4,118.44       |
| 2025-11-09 |      0.450 | $5,500.00      | $2,472.79       |
| 2025-10-26 |      0.355 | $4,000.00      | $1,421.90       |
| 2025-10-02 |      0.194 | $3,000.00      | $582.25         |
| 2025-09-07 |      0.029 | $5,500.00      | $161.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
