### Roster Details<br />
Team Name: LAGUNA<br />
Roster: dennyslaw, Duplicate, ritchiEE<br />
Global Rank: [341](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [204]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  451.6<br />
<br />
Final Rank Value (451.6) = Starting Rank Value (447.0) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 447.0
- 400 + ( ( 0.025 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 447.0


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
|            5 |      633 | 2026-04-11 | Entropy  | L   | 1.000      | -            | -                | -                | -         |    -3.74 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            4 |      644 | 2026-04-11 | Eclipse  | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    13.17 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            3 |      650 | 2026-04-11 | AaB      | L   | 1.000      | -            | -                | -                | -         |    -0.55 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            2 |     3112 | 2026-02-24 | MANA     | L   | 0.740      | -            | -                | -                | -         |    -1.22 | deb0, dennyslaw, Duplicate, fleav, ritchiEE     |
|            1 |     3141 | 2026-02-24 | BRUTE    | L   | 0.738      | -            | -                | -                | -         |    -2.99 | deb0, dennyslaw, Duplicate, fleav, ritchiEE     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
