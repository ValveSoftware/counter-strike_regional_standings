### Roster Details<br />
Team Name: Red Feet<br />
Roster: coxa, GdA, Kaiserzy, palenscki, terran<br />
Global Rank: [298](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [72]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  561.3<br />
<br />
Final Rank Value (561.3) = Starting Rank Value (546.4) + Head To Head Adjustments (14.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.4
- 400 + ( ( 0.077 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 546.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      433 | 2026-05-20 | VEXA          | L   | 1.000      | -            | -                | -                | -         |   -12.78 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            9 |      484 | 2026-05-18 | HereWeGoAgain | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.033 (0.012)    | 0 (0.000) |    11.92 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            8 |      527 | 2026-05-16 | ex-KRÜ        | L   | 1.000      | -            | -                | -                | -         |    -8.18 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            7 |      561 | 2026-05-15 | MIBR Academy  | L   | 1.000      | -            | -                | -                | -         |    -5.05 | coxa, Gabrieltudotudo, GdA, palenscki, terran |
|            6 |      621 | 2026-05-13 | Vasco         | W   | 1.000      | 0.354        | 0.011 (0.004)    | 0.368 (0.130)    | 0 (0.000) |    24.90 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            5 |     3712 | 2026-03-04 | ShindeN       | L   | 0.607      | -            | -                | -                | -         |    -0.51 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            4 |     3718 | 2026-03-04 | Imperial      | L   | 0.607      | -            | -                | -                | -         |    -0.53 | coxa, GdA, Kaiserzy, palenscki, terran        |
|            3 |     5359 | 2026-01-23 | Sharks        | L   | 0.340      | -            | -                | -                | -         |    -0.17 | coxa, GdA, palenscki, spy1337, terran         |
|            2 |     5429 | 2026-01-21 | GameHunters   | L   | 0.329      | -            | -                | -                | -         |    -4.92 | coxa, GdA, palenscki, spy1337, terran         |
|            1 |     5438 | 2026-01-21 | Sharks        | W   | 0.328      | 0.384        | 0.060 (0.008)    | 0.459 (0.058)    | 1 (0.328) |    10.17 | coxa, GdA, palenscki, spy1337, terran         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
