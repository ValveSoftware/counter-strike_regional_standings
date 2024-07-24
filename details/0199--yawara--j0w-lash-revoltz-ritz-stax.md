### Roster Details<br />
Team Name: Yawara<br />
Roster: j0w, lash, revoltz, ritz, stAx<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [199](../standings_global.md)<br />
Regional Rank: [57]( ../standings_americas.md)<br />
Final Rank Value:  499.3<br />
<br />
Final Rank Value (499.3) = Starting Rank Value (517.0) + Head To Head Adjustments (-17.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.0
- 400 + ( ( 0.058 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 517.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |        3 | 2024-07-24 | Sharks     | L   | 1.000      | -            | -                | -                | -         |    -1.85 | j0w, lash, revoltz, ritz, stAx  |
|           14 |       84 | 2024-07-21 | Galorys    | L   | 1.000      | -            | -                | -                | -         |    -5.42 | j0w, lash, revoltz, ritz, stAx  |
|           13 |      169 | 2024-07-19 | SPORT      | W   | 1.000      | 0.371        | 0.006 (0.002)    | 0.121 (0.045)    | 0 (0.000) |    23.25 | j0w, lash, revoltz, ritz, stAx  |
|           12 |      292 | 2024-07-17 | KRÜ        | L   | 1.000      | -            | -                | -                | -         |    -3.17 | j0w, lash, revoltz, ritz, stAx  |
|           11 |      395 | 2024-07-15 | inSanitY   | L   | 1.000      | -            | -                | -                | -         |    -1.21 | j0w, lash, revoltz, ritz, stAx  |
|           10 |     1241 | 2024-05-31 | 9z Academy | L   | 0.840      | -            | -                | -                | -         |   -13.09 | j0w, lash, ritz, stAx, Straafer |
|            9 |     1278 | 2024-05-29 | Vikings KR | L   | 0.829      | -            | -                | -                | -         |    -3.98 | j0w, lash, perez, ritz, stAx    |
|            8 |     1305 | 2024-05-28 | W7M        | L   | 0.821      | -            | -                | -                | -         |    -4.62 | j0w, lash, perez, ritz, stAx    |
|            7 |     1649 | 2024-05-16 | Case       | L   | 0.740      | -            | -                | -                | -         |    -2.49 | j0w, lash, perez, ritz, stAx    |
|            6 |     1778 | 2024-05-13 | Galorys    | L   | 0.720      | -            | -                | -                | -         |    -2.42 | j0w, lash, perez, ritz, stAx    |
|            5 |     1902 | 2024-05-08 | Intense    | L   | 0.686      | -            | -                | -                | -         |    -8.55 | j0w, lash, perez, ritz, stAx    |
|            4 |     1931 | 2024-05-06 | Solid      | L   | 0.674      | -            | -                | -                | -         |    -2.43 | j0w, lash, perez, ritz, stAx    |
|            3 |     3191 | 2024-03-13 | Sharks     | L   | 0.315      | -            | -                | -                | -         |    -0.72 | j0w, lash, leleo, perez, stAx   |
|            2 |     3207 | 2024-03-13 | Case       | W   | 0.314      | 0.143        | 0.028 (0.001)    | 0.751 (0.034)    | 0 (0.000) |     8.97 | j0w, lash, leleo, perez, stAx   |
|            1 |     3871 | 2024-02-14 | Imperial   | L   | 0.128      | -            | -                | -                | -         |    -0.04 | j0w, lash, leleo, perez, stAx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
