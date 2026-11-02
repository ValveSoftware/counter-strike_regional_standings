### Roster Details<br />
Team Name: Four Magic<br />
Roster: GeGo, REL, sensey, statikS, XADE<br />
Global Rank: [204](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [142]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  704.6<br />
<br />
Final Rank Value (704.6) = Starting Rank Value (680.2) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.376[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.2
- 400 + ( ( 0.150 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 680.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      306 | 2026-10-22 | LPH             | L   | 1.000      | -            | -                | -                | -         |   -11.07 | GeGo, LkS, sensey, st1xsy, statikS |
|            6 |     1468 | 2026-09-26 | BRUTE           | L   | 0.953      | -            | -                | -                | -         |    -2.72 | GeGo, REL, sensey, statikS, XADE   |
|            5 |     1480 | 2026-09-26 | Optibet         | W   | 0.953      | 0.345        | 0.003 (0.001)    | 0.108 (0.035)    | 1 (0.953) |    15.97 | GeGo, REL, sensey, statikS, XADE   |
|            4 |     1575 | 2026-09-25 | HAVU            | L   | 0.946      | -            | -                | -                | -         |    -4.77 | GeGo, REL, sensey, statikS, XADE   |
|            3 |     1622 | 2026-09-24 | 95 Vikings      | W   | 0.940      | 0.345        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.940) |     4.15 | GeGo, REL, sensey, statikS, XADE   |
|            2 |     1641 | 2026-09-24 | INFINITE Talent | W   | 0.939      | 0.345        | 0.000 (0.000)    | 0.030 (0.010)    | 1 (0.939) |     5.94 | GeGo, REL, sensey, statikS, XADE   |
|            1 |     1717 | 2026-09-23 | Optibet         | W   | 0.932      | 0.345        | 0.003 (0.001)    | 0.108 (0.035)    | 1 (0.932) |    16.93 | GeGo, REL, sensey, statikS, XADE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
