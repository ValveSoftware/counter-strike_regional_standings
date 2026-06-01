### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, choiv7, d0jca, miwo, nopzy<br />
Global Rank: [279](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [177]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  594.0<br />
<br />
Final Rank Value (594.0) = Starting Rank Value (582.7) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.161[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 582.7
- 400 + ( ( 0.096 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 582.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1845 | 2026-04-05 | magic        | L   | 0.818      | -            | -                | -                | -         |    -0.12 | andr1x, choiv7, d0jca, miwo, nopzy |
|            8 |     1993 | 2026-04-03 | FaZe         | L   | 0.805      | -            | -                | -                | -         |    -0.16 | andr1x, choiv7, d0jca, miwo, nopzy |
|            7 |     2009 | 2026-04-03 | BEE          | W   | 0.804      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.804) |     6.42 | andr1x, choiv7, d0jca, miwo, nopzy |
|            6 |     2381 | 2026-03-29 | INFINITE     | L   | 0.774      | -            | -                | -                | -         |    -0.58 | andr1x, choiv7, d0jca, miwo, nopzy |
|            5 |     2403 | 2026-03-29 | HYPERSPIRIT  | W   | 0.773      | 0.354        | 0.005 (0.001)    | 0.550 (0.151)    | 1 (0.773) |    21.99 | andr1x, choiv7, d0jca, miwo, nopzy |
|            4 |     2431 | 2026-03-29 | Eternal Fire | L   | 0.772      | -            | -                | -                | -         |    -0.65 | andr1x, choiv7, d0jca, miwo, nopzy |
|            3 |     2545 | 2026-03-27 | Honvéd       | L   | 0.761      | -            | -                | -                | -         |    -6.64 | andr1x, choiv7, d0jca, miwo, nopzy |
|            2 |     2582 | 2026-03-26 | HYPERSPIRIT  | L   | 0.755      | -            | -                | -                | -         |    -2.06 | andr1x, choiv7, d0jca, miwo, nopzy |
|            1 |     3933 | 2026-02-27 | yngods       | L   | 0.575      | -            | -                | -                | -         |    -6.82 | andr1x, choiv7, d0jca, miwo, VLDN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
