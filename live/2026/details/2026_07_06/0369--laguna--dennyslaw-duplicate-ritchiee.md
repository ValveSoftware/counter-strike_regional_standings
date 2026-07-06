### Roster Details<br />
Team Name: LAGUNA<br />
Roster: dennyslaw, Duplicate, ritchiEE<br />
Global Rank: [369](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [228]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  435.0<br />
<br />
Final Rank Value (435.0) = Starting Rank Value (430.8) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.016<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 430.8
- 400 + ( ( 0.016 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 430.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2280 | 2026-04-11 | Entropy  | L   | 0.628      | -            | -                | -                | -         |    -1.89 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            4 |     2291 | 2026-04-11 | Eclipse  | W   | 0.626      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.626) |     8.89 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            3 |     2297 | 2026-04-11 | EAC      | L   | 0.625      | -            | -                | -                | -         |    -0.36 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            2 |     4759 | 2026-02-24 | ex-MANA  | L   | 0.321      | -            | -                | -                | -         |    -1.18 | deb0, dennyslaw, Duplicate, fleav, ritchiEE     |
|            1 |     4788 | 2026-02-24 | BRUTE    | L   | 0.319      | -            | -                | -                | -         |    -1.30 | deb0, dennyslaw, Duplicate, fleav, ritchiEE     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
