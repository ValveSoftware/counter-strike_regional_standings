### Roster Details<br />
Team Name: Wildcard Academy<br />
Roster: fr3nd, sSen, T4gg3D, TMKj, Wonder<br />
Global Rank: [225](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  528.6<br />
<br />
Final Rank Value (528.6) = Starting Rank Value (516.4) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.4
- 400 + ( ( 0.062 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 516.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2443 | 2025-03-14 | ex-SABRE   | L   | 0.433      | -            | -                | -                | -         |    -3.11 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            4 |     2459 | 2025-03-13 | benched    | W   | 0.426      | 0.372        | 0.000 (0.000)    | 0.073 (0.012)    | 0 (0.000) |     6.75 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            3 |     2490 | 2025-03-11 | Leo        | W   | 0.414      | 0.372        | 0.000 (0.000)    | 0.394 (0.061)    | 0 (0.000) |     7.96 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            2 |     2657 | 2025-03-08 | Lazer Cats | W   | 0.393      | 0.372        | 0.000 (0.000)    | 0.038 (0.006)    | 0 (0.000) |     4.36 | fr3nd, sSen, T4gg3D, TMKj, Wonder |
|            1 |     2825 | 2025-03-05 | modeame    | L   | 0.373      | -            | -                | -                | -         |    -3.75 | fr3nd, sSen, T4gg3D, TMKj, Wonder |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($365.14)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      0.487 | $750.00        | $365.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
