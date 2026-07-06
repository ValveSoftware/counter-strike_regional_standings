### Roster Details<br />
Team Name: HereWeGoAgain<br />
Roster: fraga, guizo, shrr, trindade<br />
Global Rank: [361](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [95]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  467.8<br />
<br />
Final Rank Value (467.8) = Starting Rank Value (492.5) + Head To Head Adjustments (-24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.5
- 400 + ( ( 0.049 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 492.5


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
|            8 |     1145 | 2026-05-18 | Red Feet       | L   | 0.876      | -            | -                | -                | -         |   -11.57 | extazzy, fraga, guizo, shrr, trindade |
|            7 |     1179 | 2026-05-17 | R2             | L   | 0.866      | -            | -                | -                | -         |    -7.11 | extazzy, fraga, guizo, shrr, trindade |
|            6 |     1249 | 2026-05-14 | Crashers       | W   | 0.848      | 0.354        | 0.002 (0.000)    | 0.305 (0.092)    | 0 (0.000) |    18.66 | extazzy, fraga, guizo, shrr, trindade |
|            5 |     1318 | 2026-05-12 | BESTIA Academy | L   | 0.835      | -            | -                | -                | -         |    -6.66 | extazzy, fraga, guizo, shrr, trindade |
|            4 |     1606 | 2026-05-02 | FURIA fe       | L   | 0.766      | -            | -                | -                | -         |    -8.82 | flush, fraga, guizo, Ltm, shrr        |
|            3 |     1685 | 2026-04-30 | Crashers       | L   | 0.755      | -            | -                | -                | -         |    -6.40 | flush, fraga, guizo, Ltm, shrr        |
|            2 |     1756 | 2026-04-29 | Isurus         | L   | 0.746      | -            | -                | -                | -         |    -2.38 | flush, fraga, guizo, Ltm, shrr        |
|            1 |     6318 | 2026-01-15 | paiN Academy   | L   | 0.055      | -            | -                | -                | -         |    -0.41 | flush, fraga, guizo, Ltm, trindade    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
