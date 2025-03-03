### Roster Details<br />
Team Name: kONO<br />
Roster: amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN<br />
Global Rank: [172](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [113]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  658.0<br />
<br />
Final Rank Value (658.0) = Starting Rank Value (549.3) + Head To Head Adjustments (108.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 549.3
- 400 + ( ( 0.077 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 549.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      243 | 2025-02-15 | Rebels        | L   | 1.000      | -            | -                | -                | -         |   -12.88 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|           12 |      250 | 2025-02-15 | BAKS          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.060 (0.009)    | 0 (0.000) |     6.36 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|           11 |      261 | 2025-02-15 | RUSH B        | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.578 (0.083)    | 0 (0.000) |    24.37 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|           10 |      422 | 2025-02-09 | CYBERSHOKE    | L   | 1.000      | -            | -                | -                | -         |    -9.04 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            9 |      563 | 2025-02-05 | Zero Tenacity | W   | 1.000      | 0.143        | 0.026 (0.004)    | 0.603 (0.086)    | 0 (0.000) |    23.04 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            8 |      601 | 2025-02-04 | Adventurers   | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.105 (0.015)    | 0 (0.000) |    19.29 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            7 |      670 | 2025-01-28 | ECSTATIC      | L   | 0.972      | -            | -                | -                | -         |    -6.49 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            6 |      680 | 2025-01-25 | CPH Wolves    | L   | 0.955      | -            | -                | -                | -         |    -8.10 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            5 |      689 | 2025-01-24 | Iberian Soul  | W   | 0.946      | 0.143        | 0.015 (0.002)    | 0.636 (0.086)    | 0 (0.000) |    22.34 | amster, cptkurtka023, s4ltovsk1yy, Sijeyy, zogeN |
|            4 |      730 | 2025-01-10 | SINNERS       | L   | 0.852      | -            | -                | -                | -         |    -4.89 | amster, byr9, cptkurtka023, s4ltovsk1yy, Sijeyy  |
|            3 |      735 | 2025-01-09 | BadGuys       | W   | 0.847      | 0.417        | 0.000 (0.000)    | 0.145 (0.051)    | 0 (0.000) |    11.78 | amster, byr9, cptkurtka023, s4ltovsk1yy, Sijeyy  |
|            2 |      749 | 2025-01-05 | ECSTATIC      | W   | 0.821      | 0.143        | 0.032 (0.004)    | 1.000 (0.117)    | 0 (0.000) |    21.95 | amster, byr9, cptkurtka023, nifee, s4ltovsk1yy   |
|            1 |      759 | 2025-01-03 | Rhyno         | W   | 0.807      | 0.143        | 0.013 (0.002)    | 0.259 (0.030)    | 0 (0.000) |    21.03 | amster, byr9, cptkurtka023, nifee, s4ltovsk1yy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
