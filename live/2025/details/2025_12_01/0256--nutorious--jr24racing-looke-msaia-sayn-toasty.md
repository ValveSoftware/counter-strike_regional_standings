### Roster Details<br />
Team Name: NuTorious<br />
Roster: Jr24racing, looke, Msaia, sayN, Toasty<br />
Global Rank: [256](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [73]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  520.1<br />
<br />
Final Rank Value (520.1) = Starting Rank Value (543.2) + Head To Head Adjustments (-23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.075<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 543.2
- 400 + ( ( 0.075 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 543.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      506 | 2025-11-08 | Mavrek          | L   | 1.000      | -            | -                | -                | -         |   -15.94 | Jester, looke, Msaia, sayN, Toasty     |
|           10 |      509 | 2025-11-08 | FoxHound        | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    10.02 | Jester, looke, Msaia, sayN, Toasty     |
|            9 |      517 | 2025-11-08 | Mavrek          | L   | 1.000      | -            | -                | -                | -         |   -16.93 | Jester, looke, Msaia, sayN, Toasty     |
|            8 |     1535 | 2025-10-08 | TSG             | L   | 0.843      | -            | -                | -                | -         |   -12.76 | Jr24racing, Msaia, nova, sayN, Toasty  |
|            7 |     1593 | 2025-10-07 | Green Tea Party | W   | 0.836      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.68 | Jr24racing, Msaia, nova, sayN, Toasty  |
|            6 |     1654 | 2025-10-06 | Marsborne       | L   | 0.829      | -            | -                | -                | -         |    -1.11 | Jr24racing, Msaia, nova, sayN, Toasty  |
|            5 |     1714 | 2025-10-05 | Nocturnal       | W   | 0.823      | 0.363        | 0.002 (0.001)    | 0.174 (0.052)    | 0 (0.000) |    17.88 | Jr24racing, Msaia, nova, sayN, Toasty  |
|            4 |     2285 | 2025-09-20 | LAG             | L   | 0.722      | -            | -                | -                | -         |    -5.72 | Jr24racing, Msaia, nova, sayN, Toasty  |
|            3 |     3793 | 2025-07-27 | BOSS            | L   | 0.355      | -            | -                | -                | -         |    -2.68 | Jr24racing, looke, Msaia, nova, Toasty |
|            2 |     3956 | 2025-07-18 | InControl       | L   | 0.296      | -            | -                | -                | -         |    -2.66 | Jr24racing, looke, Msaia, nova, Toasty |
|            1 |     3958 | 2025-07-18 | SkinRave        | L   | 0.295      | -            | -                | -                | -         |    -0.94 | Jr24racing, looke, Msaia, nova, Toasty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
