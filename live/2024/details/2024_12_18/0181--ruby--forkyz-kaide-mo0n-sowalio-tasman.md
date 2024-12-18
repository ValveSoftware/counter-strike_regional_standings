### Roster Details<br />
Team Name: RUBY<br />
Roster: forkyz, Kaide, mo0N, sowalio, tasman<br />
Global Rank: [181](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [118]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  662.3<br />
<br />
Final Rank Value (662.3) = Starting Rank Value (582.1) + Head To Head Adjustments (80.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 582.1
- 400 + ( ( 0.095 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 582.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1587 | 2024-10-04 | HOTU             | L   | 0.698      | -            | -                | -                | -         |    -7.05 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           25 |     1652 | 2024-10-02 | ECSTATIC         | L   | 0.687      | -            | -                | -                | -         |    -2.91 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           24 |     1703 | 2024-10-01 | Passion UA       | L   | 0.680      | -            | -                | -                | -         |    -1.59 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           23 |     1760 | 2024-09-29 | FLuffy Gangsters | W   | 0.665      | 0.143        | 0.012 (0.001)    | 0.541 (0.051)    | 0 (0.000) |    12.80 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           22 |     1931 | 2024-09-25 | ENCE Academy     | W   | 0.640      | 0.143        | 0.009 (0.001)    | 0.288 (0.026)    | 0 (0.000) |    11.97 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           21 |     1981 | 2024-09-24 | Daystar          | W   | 0.634      | 0.143        | -                | 0.087 (0.008)    | 0 (0.000) |    12.37 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           20 |     2042 | 2024-09-22 | Rhyno            | L   | 0.621      | -            | -                | -                | -         |    -1.38 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           19 |     2088 | 2024-09-20 | CPH Wolves       | W   | 0.607      | 0.143        | 0.010 (0.001)    | 0.567 (0.049)    | 0 (0.000) |    15.35 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           18 |     2124 | 2024-09-19 | FLuffy Gangsters | W   | 0.601      | 0.143        | 0.012 (0.001)    | 0.541 (0.046)    | 0 (0.000) |    13.06 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           17 |     2309 | 2024-09-13 | DMS              | L   | 0.560      | -            | -                | -                | -         |    -6.11 | Chill, Kaide, mo0N, Something, sowalio |
|           16 |     2357 | 2024-09-12 | ENCE Academy     | W   | 0.551      | 0.143        | 0.009 (0.001)    | 0.288 (0.023)    | 0 (0.000) |    11.72 | Chill, Kaide, mo0N, Something, sowalio |
|           15 |     2384 | 2024-09-11 | DMS              | L   | 0.545      | -            | -                | -                | -         |    -6.11 | Chill, Kaide, mo0N, Something, sowalio |
|           14 |     2536 | 2024-09-05 | ECLOT            | L   | 0.507      | -            | -                | -                | -         |    -0.34 | Chill, Kaide, mo0N, Something, sowalio |
|           13 |     2577 | 2024-09-04 | Spirit Academy   | L   | 0.500      | -            | -                | -                | -         |    -1.59 | Chill, Kaide, mo0N, Something, sowalio |
|           12 |     2618 | 2024-09-03 | BC.Game          | W   | 0.492      | 0.372        | 0.041 (0.007)    | 0.427 (0.078)    | 0 (0.000) |    12.80 | Chill, Kaide, mo0N, Something, sowalio |
|           11 |     3074 | 2024-08-21 | los kogutos      | L   | 0.407      | -            | -                | -                | -         |    -0.58 | Chill, Kaide, mo0N, Something, sowalio |
|           10 |     3149 | 2024-08-20 | Young Ninjas     | L   | 0.400      | -            | -                | -                | -         |    -3.59 | Chill, Kaide, mo0N, Something, sowalio |
|            9 |     3224 | 2024-08-17 | Nexus            | W   | 0.380      | 0.435        | 0.326 (0.054)    | 0.848 (0.140)    | 0 (0.000) |    11.85 | Chill, Kaide, mo0N, Something, sowalio |
|            8 |     3244 | 2024-08-16 | Endpoint         | L   | 0.374      | -            | -                | -                | -         |    -1.71 | Chill, Kaide, mo0N, Something, sowalio |
|            7 |     3308 | 2024-08-14 | Insilio          | W   | 0.358      | 0.435        | 0.017 (0.003)    | 0.414 (0.065)    | 0 (0.000) |     9.04 | Chill, Kaide, mo0N, Something, sowalio |
|            6 |     3648 | 2024-08-04 | Project G        | L   | 0.291      | -            | -                | -                | -         |    -6.81 | dekz, fostar, Kaide, mo0N, sowalio     |
|            5 |     3990 | 2024-07-25 | 9z               | L   | 0.227      | -            | -                | -                | -         |    -0.58 | dekz, fostar, Kaide, mo0N, sowalio     |
|            4 |     4071 | 2024-07-23 | Metizport        | W   | 0.212      | 0.435        | 0.128 (0.012)    | 0.843 (0.078)    | 0 (0.000) |     6.58 | dekz, fostar, Kaide, mo0N, sowalio     |
|            3 |     4165 | 2024-07-20 | Passion UA       | L   | 0.191      | -            | -                | -                | -         |    -0.17 | dekz, fostar, Kaide, mo0N, sowalio     |
|            2 |     4323 | 2024-07-17 | FORZE Reload     | W   | 0.172      | 0.435        | 0.019 (0.001)    | -                | -         |     3.62 | dekz, fostar, Kaide, mo0N, sowalio     |
|            1 |     4367 | 2024-07-16 | Sampi            | L   | 0.166      | -            | -                | -                | -         |    -0.41 | dekz, fostar, Kaide, mo0N, sowalio     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
