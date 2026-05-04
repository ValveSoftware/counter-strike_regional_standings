### Roster Details<br />
Team Name: 5Actors<br />
Roster: airscape, Aunkere, Jerry, KENSI, tried<br />
Global Rank: [324](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [195]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  498.9<br />
<br />
Final Rank Value (498.9) = Starting Rank Value (486.5) + Head To Head Adjustments (12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.185[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.5
- 400 + ( ( 0.047 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 486.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      999 | 2026-04-03 | BET-M          | L   | 0.992      | -            | -                | -                | -         |    -0.51 | airscape, Aunkere, Jerry, KENSI, tried |
|            7 |     1021 | 2026-04-03 | Void Sentinels | W   | 0.991      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.991) |    11.37 | airscape, Aunkere, Jerry, KENSI, tried |
|            6 |     1025 | 2026-04-03 | Nemiga         | L   | 0.991      | -            | -                | -                | -         |    -0.26 | airscape, Aunkere, Jerry, KENSI, tried |
|            5 |     2389 | 2026-03-10 | Nemiga         | L   | 0.835      | -            | -                | -                | -         |    -0.29 | airscape, Aunkere, Jerry, KENSI, tried |
|            4 |     2399 | 2026-03-10 | SPARTA         | W   | 0.834      | 0.371        | 0.000 (0.000)    | 0.050 (0.015)    | 1 (0.834) |    16.68 | airscape, Aunkere, Jerry, KENSI, tried |
|            3 |     2407 | 2026-03-10 | ARCRED         | L   | 0.834      | -            | -                | -                | -         |    -0.45 | airscape, Aunkere, Jerry, KENSI, tried |
|            2 |     2770 | 2026-03-03 | Younglings     | L   | 0.788      | -            | -                | -                | -         |   -13.72 | airscape, Aunkere, Jerry, KENSI, tried |
|            1 |     2795 | 2026-03-03 | SPARTA         | L   | 0.786      | -            | -                | -                | -         |    -0.38 | airscape, Aunkere, Jerry, KENSI, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
