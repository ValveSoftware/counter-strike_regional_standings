### Roster Details<br />
Team Name: ACROBATS<br />
Roster: dwushka, fame, FL1T, Krad, tried<br />
Global Rank: [248](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [160]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  652.4<br />
<br />
Final Rank Value (652.4) = Starting Rank Value (548.0) + Head To Head Adjustments (104.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 548.0
- 400 + ( ( 0.076 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 548.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      133 | 2026-04-02 | 100 Thieves | L   | 1.000      | -            | -                | -                | -         |    -0.58 | dwushka, fame, FL1T, Krad, tried |
|            5 |      150 | 2026-04-02 | WW          | W   | 1.000      | 0.143        | 0.034 (0.005)    | 0.864 (0.123)    | 0 (0.000) |    30.51 | dwushka, fame, FL1T, Krad, tried |
|            4 |      189 | 2026-04-01 | magic       | L   | 1.000      | -            | -                | -                | -         |    -0.67 | dwushka, fame, FL1T, Krad, tried |
|            3 |      248 | 2026-03-31 | HOTU        | W   | 1.000      | 0.143        | 0.078 (0.011)    | 0.666 (0.095)    | 0 (0.000) |    31.00 | dwushka, fame, FL1T, Krad, tried |
|            2 |      558 | 2026-03-25 | AM          | W   | 1.000      | 0.143        | 0.025 (0.004)    | 0.767 (0.110)    | 0 (0.000) |    30.91 | dwushka, fame, FL1T, Krad, tried |
|            1 |      571 | 2026-03-25 | B8 Academy  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.19 | dwushka, fame, FL1T, Krad, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
