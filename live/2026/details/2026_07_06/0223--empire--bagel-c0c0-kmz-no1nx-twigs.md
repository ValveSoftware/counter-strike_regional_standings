### Roster Details<br />
Team Name: EMPIRE<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [223](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [49]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  699.3<br />
<br />
Final Rank Value (699.3) = Starting Rank Value (712.0) + Head To Head Adjustments (-12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.131[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.0
- 400 + ( ( 0.166 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 712.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1799 | 2026-04-27 | Wanted Goons   | L   | 0.737      | -            | -                | -                | -         |   -11.07 | BAGEL, C0C0, KmZ, no1nx, Shawta |
|           18 |     1849 | 2026-04-26 | ex-Aether      | L   | 0.730      | -            | -                | -                | -         |   -13.24 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           17 |     1919 | 2026-04-25 | LAG            | L   | 0.723      | -            | -                | -                | -         |    -5.13 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           16 |     1923 | 2026-04-25 | Foxtrot        | W   | 0.722      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.722) |     3.12 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           15 |     1939 | 2026-04-25 | LAG            | L   | 0.721      | -            | -                | -                | -         |    -5.15 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           14 |     2194 | 2026-04-15 | regain         | L   | 0.656      | -            | -                | -                | -         |    -9.44 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           13 |     2249 | 2026-04-12 | Aether         | W   | 0.637      | 0.333        | 0.003 (0.001)    | 0.170 (0.036)    | 0 (0.000) |    10.52 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           12 |     2327 | 2026-04-09 | Clockwork      | W   | 0.616      | 0.333        | 0.000 (0.000)    | 0.022 (0.004)    | 0 (0.000) |     2.84 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           11 |     2383 | 2026-04-07 | FarmVille      | L   | 0.603      | -            | -                | -                | -         |    -9.02 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           10 |     2683 | 2026-04-02 | Zomblers       | L   | 0.569      | -            | -                | -                | -         |    -9.81 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            9 |     2785 | 2026-04-01 | LAG            | W   | 0.563      | 0.333        | 0.024 (0.004)    | 0.520 (0.098)    | 0 (0.000) |    14.76 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            8 |     3117 | 2026-03-28 | LAG            | L   | 0.536      | -            | -                | -                | -         |    -2.63 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            7 |     3133 | 2026-03-28 | Wanted Goons   | L   | 0.535      | -            | -                | -                | -         |    -8.90 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            6 |     3148 | 2026-03-28 | LAG            | L   | 0.534      | -            | -                | -                | -         |    -2.81 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            5 |     3163 | 2026-03-28 | Wanted Goons   | W   | 0.533      | 0.354        | 0.000 (0.000)    | 0.172 (0.032)    | 1 (0.533) |     7.96 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            4 |     3198 | 2026-03-27 | ClayMakers     | W   | 0.529      | 0.398        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.79 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            3 |     3673 | 2026-03-18 | Zomblers       | W   | 0.470      | 0.143        | 0.010 (0.001)    | 0.328 (0.022)    | 0 (0.000) |     7.54 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            2 |     3764 | 2026-03-16 | Wanted Goons   | W   | 0.457      | 0.143        | 0.000 (0.000)    | 0.172 (0.011)    | 0 (0.000) |     7.25 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            1 |     3849 | 2026-03-14 | insane players | W   | 0.443      | 0.143        | 0.011 (0.001)    | 0.274 (0.017)    | 0 (0.000) |     6.76 | BAGEL, C0C0, KmZ, no1nx, twigs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,082.85)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.541 | $2,000.00      | $1,082.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
