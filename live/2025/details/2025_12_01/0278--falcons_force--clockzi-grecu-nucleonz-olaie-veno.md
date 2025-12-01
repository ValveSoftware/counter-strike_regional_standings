### Roster Details<br />
Team Name: Falcons Force<br />
Roster: clockzi, grecu, NucleonZ, Olaie, VENO<br />
Global Rank: [278](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [154]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  461.1<br />
<br />
Final Rank Value (461.1) = Starting Rank Value (451.0) + Head To Head Adjustments (10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.027<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 451.0
- 400 + ( ( 0.027 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 451.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      572 | 2025-11-07 | MOUZ NXT    | L   | 1.000      | -            | -                | -                | -         |    -3.24 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            4 |      587 | 2025-11-07 | FUT Academy | L   | 1.000      | -            | -                | -                | -         |   -11.76 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            3 |      604 | 2025-11-07 | EYEBALLERS  | L   | 1.000      | -            | -                | -                | -         |    -0.46 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            2 |      618 | 2025-11-07 | MASONIC     | W   | 1.000      | 0.335        | 0.000 (0.000)    | 0.189 (0.063)    | 1 (1.000) |    25.71 | clockzi, grecu, NucleonZ, Olaie, VENO |
|            1 |      632 | 2025-11-07 | ENCE        | L   | 1.000      | -            | -                | -                | -         |    -0.20 | clockzi, grecu, NucleonZ, Olaie, VENO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
