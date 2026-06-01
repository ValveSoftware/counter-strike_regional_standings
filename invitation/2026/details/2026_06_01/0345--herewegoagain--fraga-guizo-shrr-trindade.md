### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: fraga, guizo, shrr, trindade<br />
Global Rank: [345](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [93]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  473.5<br />
<br />
Final Rank Value (473.5) = Starting Rank Value (499.2) + Head To Head Adjustments (-25.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.2
- 400 + ( ( 0.052 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 499.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      484 | 2026-05-18 | Red Feet       | L   | 1.000      | -            | -                | -                | -         |   -11.92 | extazzy, fraga, guizo, shrr, trindade |
|            7 |      518 | 2026-05-17 | R2             | L   | 1.000      | -            | -                | -                | -         |    -7.08 | extazzy, fraga, guizo, shrr, trindade |
|            6 |      588 | 2026-05-14 | Crashers       | W   | 1.000      | 0.354        | 0.002 (0.001)    | 0.431 (0.153)    | 0 (0.000) |    22.77 | extazzy, fraga, guizo, shrr, trindade |
|            5 |      657 | 2026-05-12 | BESTIA Academy | L   | 1.000      | -            | -                | -                | -         |    -6.78 | extazzy, fraga, guizo, shrr, trindade |
|            4 |      945 | 2026-05-02 | FURIA fe       | L   | 0.999      | -            | -                | -                | -         |   -11.15 | flush, fraga, guizo, Ltm, shrr        |
|            3 |     1024 | 2026-04-30 | Crashers       | L   | 0.988      | -            | -                | -                | -         |    -7.25 | flush, fraga, guizo, Ltm, shrr        |
|            2 |     1095 | 2026-04-29 | Isurus         | L   | 0.979      | -            | -                | -                | -         |    -2.29 | flush, fraga, guizo, Ltm, shrr        |
|            1 |     5657 | 2026-01-15 | paiN Academy   | L   | 0.288      | -            | -                | -                | -         |    -1.98 | flush, fraga, guizo, Ltm, trindade    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
