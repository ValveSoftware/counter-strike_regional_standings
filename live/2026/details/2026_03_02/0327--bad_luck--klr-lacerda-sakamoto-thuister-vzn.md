### Roster Details<br />
Team Name: Bad Luck<br />
Roster: KLR, Lacerda, sakamoto, Thuister, vzn<br />
Global Rank: [327](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [91]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  429.5<br />
<br />
Final Rank Value (429.5) = Starting Rank Value (402.9) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.9
- 400 + ( ( 0.002 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 402.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1425 | 2026-01-22 | Bounty Hunters  | L   | 0.941      | -            | -                | -                | -         |    -1.91 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            5 |     1464 | 2026-01-21 | MAGICOS         | W   | 0.935      | 0.371        | 0.000 (0.000)    | 0.078 (0.027)    | 0 (0.000) |    13.90 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            4 |     1505 | 2026-01-20 | Prison Breakers | L   | 0.927      | -            | -                | -                | -         |    -9.33 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            3 |     1541 | 2026-01-18 | Charrados       | W   | 0.914      | 0.371        | 0.000 (0.000)    | 0.034 (0.012)    | 0 (0.000) |    13.70 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            2 |     1620 | 2026-01-16 | Isurus          | L   | 0.901      | -            | -                | -                | -         |    -3.24 | KLR, Lacerda, sakamoto, Thuister, vzn |
|            1 |     1711 | 2026-01-14 | HereWeGoAgain   | W   | 0.888      | 0.371        | 0.000 (0.000)    | 0.070 (0.023)    | 0 (0.000) |    13.42 | KLR, Lacerda, sakamoto, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
