### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: flush, fraga, Ltm, trindade<br />
Global Rank: [331](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [93]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  401.0<br />
<br />
Final Rank Value (401.0) = Starting Rank Value (400.5) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.5
- 400 + ( ( 0.000 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 400.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1484 | 2026-01-21 | GameHunters  | L   | 0.933      | -            | -                | -                | -         |    -4.01 | flush, fraga, Ltm, nordin, trindade |
|            4 |     1521 | 2026-01-19 | Satriales    | W   | 0.920      | 0.371        | 0.000 (0.000)    | 0.034 (0.012)    | 0 (0.000) |    14.39 | flush, fraga, guizo, Ltm, trindade  |
|            3 |     1599 | 2026-01-17 | ELITES       | W   | 0.906      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.54 | flush, fraga, Ltm, nordin, trindade |
|            2 |     1682 | 2026-01-15 | paiN Academy | L   | 0.894      | -            | -                | -                | -         |   -10.06 | flush, fraga, guizo, Ltm, trindade  |
|            1 |     1711 | 2026-01-14 | Bad Luck     | L   | 0.888      | -            | -                | -                | -         |   -13.42 | flush, fraga, Ltm, nordin, trindade |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
