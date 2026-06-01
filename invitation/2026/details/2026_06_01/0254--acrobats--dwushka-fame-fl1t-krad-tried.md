### Roster Details<br />
Team Name: ACROBATS<br />
Roster: dwushka, fame, FL1T, Krad, tried<br />
Global Rank: [254](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [165]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  649.2<br />
<br />
Final Rank Value (649.2) = Starting Rank Value (574.8) + Head To Head Adjustments (74.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.8
- 400 + ( ( 0.092 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 574.8


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
|            6 |     2054 | 2026-04-02 | 100 Thieves | L   | 0.801      | -            | -                | -                | -         |    -0.52 | dwushka, fame, FL1T, Krad, tried |
|            5 |     2083 | 2026-04-02 | WW          | W   | 0.799      | 0.769        | 0.025 (0.015)    | 0.689 (0.423)    | 0 (0.000) |    23.78 | dwushka, fame, FL1T, Krad, tried |
|            4 |     2145 | 2026-04-01 | magic       | L   | 0.794      | -            | -                | -                | -         |    -0.16 | dwushka, fame, FL1T, Krad, tried |
|            3 |     2229 | 2026-03-31 | HOTU        | W   | 0.787      | 0.769        | 0.012 (0.007)    | 0.120 (0.073)    | 0 (0.000) |    19.20 | dwushka, fame, FL1T, Krad, tried |
|            2 |     2629 | 2026-03-25 | AM          | W   | 0.748      | 0.624        | 0.016 (0.007)    | 0.725 (0.338)    | 0 (0.000) |    23.02 | dwushka, fame, FL1T, Krad, tried |
|            1 |     2642 | 2026-03-25 | B8 Academy  | W   | 0.747      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.15 | dwushka, fame, FL1T, Krad, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
