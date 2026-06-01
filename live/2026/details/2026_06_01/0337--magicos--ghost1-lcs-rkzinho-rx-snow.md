### Roster Details<br />
Team Name: MAGICOS<br />
Roster: ghosT1, Lcs, Rkzinho, rx, snow<br />
Global Rank: [337](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [89]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  489.2<br />
<br />
Final Rank Value (489.2) = Starting Rank Value (488.6) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.6
- 400 + ( ( 0.047 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 488.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5431 | 2026-01-21 | Pugdesonesto  | L   | 0.329      | -            | -                | -                | -         |    -5.24 | ghosT1, Lcs, Rkzinho, rx, snow |
|            4 |     5485 | 2026-01-19 | lospegadinhas | W   | 0.314      | 0.371        | 0.000 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     3.69 | ghosT1, Lcs, Rkzinho, rx, snow |
|            3 |     5533 | 2026-01-17 | Crashers      | L   | 0.302      | -            | -                | -                | -         |    -1.91 | ghosT1, Lcs, Rkzinho, rx, snow |
|            2 |     5607 | 2026-01-16 | Players       | L   | 0.294      | -            | -                | -                | -         |    -2.79 | ghosT1, Lcs, Rkzinho, rx, snow |
|            1 |     5703 | 2026-01-13 | paiN Academy  | W   | 0.274      | 0.371        | 0.003 (0.000)    | 0.484 (0.049)    | 0 (0.000) |     6.88 | ghosT1, Lcs, Rkzinho, rx, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
