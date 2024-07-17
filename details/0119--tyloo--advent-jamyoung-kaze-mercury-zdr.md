### Roster Details<br />
Team Name: TYLOO<br />
Roster: advent, JamYoung, kaze, Mercury, zdr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [8]( ../standings_asia.md)<br />
Final Rank Value:  840.0<br />
<br />
Final Rank Value (840.0) = Starting Rank Value (836.3) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.401[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 836.3
- 400 + ( ( 0.203 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 836.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1833 | 2024-04-27 | M80                | L   | 0.660      | -            | -                | -                | -         |    -1.61 | advent, JamYoung, kaze, Mercury, zdr    |
|           28 |     1856 | 2024-04-26 | Sharks             | W   | 0.654      | 0.889        | 0.030 (0.018)    | 0.044 (0.026)    | 1 (0.654) |     9.27 | advent, JamYoung, kaze, Mercury, zdr    |
|           27 |     1893 | 2024-04-25 | Falcons            | L   | 0.646      | -            | -                | -                | -         |    -0.36 | advent, JamYoung, kaze, Mercury, zdr    |
|           26 |     1915 | 2024-04-24 | G2                 | L   | 0.639      | -            | -                | -                | -         |    -0.04 | advent, JamYoung, kaze, Mercury, zdr    |
|           25 |     2048 | 2024-04-19 | Rare Atom          | L   | 0.605      | -            | -                | -                | -         |   -13.62 | advent, JamYoung, kaze, Mercury, zdr    |
|           24 |     2088 | 2024-04-18 | The MongolZ        | L   | 0.600      | -            | -                | -                | -         |    -0.05 | advent, JamYoung, kaze, Mercury, zdr    |
|           23 |     2101 | 2024-04-18 | Lynn Vision        | W   | 0.599      | 0.143        | 0.126 (0.011)    | 0.212 (0.018)    | 0 (0.000) |    15.82 | advent, JamYoung, kaze, Mercury, zdr    |
|           22 |     2132 | 2024-04-17 | Sheer Conquer      | W   | 0.592      | 0.143        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     2.63 | advent, JamYoung, kaze, Mercury, zdr    |
|           21 |     2138 | 2024-04-17 | The Huns           | W   | 0.592      | 0.143        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.49 | advent, JamYoung, kaze, Mercury, zdr    |
|           20 |     2386 | 2024-04-08 | Lynn Vision        | L   | 0.533      | -            | -                | -                | -         |    -2.57 | advent, JamYoung, kaze, Mercury, zdr    |
|           19 |     2396 | 2024-04-08 | MOUZ               | L   | 0.531      | -            | -                | -                | -         |    -0.02 | advent, JamYoung, kaze, Mercury, zdr    |
|           18 |     2930 | 2024-03-13 | LYG                | L   | 0.359      | -            | -                | -                | -         |    -7.15 | advent, JamYoung, lyrics3, Mercury, zdr |
|           17 |     2936 | 2024-03-13 | padaem Holodnie    | W   | 0.358      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.90 | advent, JamYoung, lyrics3, Mercury, zdr |
|           16 |     3285 | 2024-02-27 | ATOX               | L   | 0.258      | -            | -                | -                | -         |    -2.84 | advent, aumaN, JamYoung, kaze, Mercury  |
|           15 |     3297 | 2024-02-26 | Lynn Vision        | L   | 0.251      | -            | -                | -                | -         |    -1.38 | advent, aumaN, JamYoung, kaze, Mercury  |
|           14 |     3299 | 2024-02-25 | JiJieHao           | W   | 0.250      | 0.143        | -                | 0.063 (0.002)    | 1 (0.250) |     0.69 | advent, aumaN, JamYoung, kaze, Mercury  |
|           13 |     3803 | 2024-02-02 | Rare Atom          | L   | 0.092      | -            | -                | -                | -         |    -2.03 | advent, aumaN, JamYoung, kaze, Mercury  |
|           12 |     3833 | 2024-02-01 | Newhappy           | W   | 0.085      | 0.143        | -                | 0.028 (0.000)    | 0 (0.000) |     0.39 | advent, aumaN, JamYoung, kaze, Mercury  |
|           11 |     3835 | 2024-02-01 | GR                 | W   | 0.084      | 0.143        | 0.012 (0.000)    | 0.065 (0.001)    | 0 (0.000) |     0.85 | advent, aumaN, JamYoung, kaze, Mercury  |
|           10 |     3889 | 2024-01-27 | Lynn Vision        | L   | 0.057      | -            | -                | -                | -         |    -0.30 | advent, aumaN, JamYoung, kaze, Mercury  |
|            9 |     3898 | 2024-01-27 | The MongolZ        | W   | 0.053      | 0.143        | 1.000 (0.008)    | 0.653 (0.005)    | -         |     1.66 | advent, aumaN, JamYoung, kaze, Mercury  |
|            8 |     3902 | 2024-01-27 | The Huns           | W   | 0.052      | 0.143        | -                | 0.012 (0.000)    | -         |     0.21 | advent, aumaN, JamYoung, kaze, Mercury  |
|            7 |     3905 | 2024-01-26 | ACME               | W   | 0.050      | 0.435        | 0.000 (0.000)    | 0.002 (0.000)    | 1 (0.050) |     0.33 | advent, aumaN, JamYoung, kaze, Mercury  |
|            6 |     3916 | 2024-01-26 | The MongolZ        | L   | 0.046      | -            | -                | -                | -         |    -0.00 | advent, aumaN, JamYoung, kaze, Mercury  |
|            5 |     3920 | 2024-01-26 | Wings Up           | W   | 0.046      | -            | -                | -                | -         |     0.18 | advent, aumaN, JamYoung, kaze, Mercury  |
|            4 |     3927 | 2024-01-26 | The MongolZ        | L   | 0.044      | -            | -                | -                | -         |    -0.00 | advent, aumaN, JamYoung, kaze, Mercury  |
|            3 |     3929 | 2024-01-25 | Incheon On Sla2ers | W   | 0.043      | 0.435        | 0.000 (0.000)    | -                | 1 (0.043) |     0.20 | advent, aumaN, JamYoung, kaze, Mercury  |
|            2 |     4031 | 2024-01-21 | Rare Atom          | W   | 0.012      | 0.143        | 0.007 (0.000)    | -                | -         |     0.12 | advent, aumaN, JamYoung, kaze, Mercury  |
|            1 |     4040 | 2024-01-20 | Lynn Vision        | L   | 0.011      | -            | -                | -                | -         |    -0.06 | advent, aumaN, JamYoung, kaze, Mercury  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,845.80)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-04-14 |      0.572 | $4,000.00      | $2,288.49       |
| 2024-01-28 |      0.059 | $4,000.00      | $235.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
