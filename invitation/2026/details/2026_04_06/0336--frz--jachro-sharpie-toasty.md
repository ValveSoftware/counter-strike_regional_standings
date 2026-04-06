### Roster Details<br />
Team Name: FRZ<br />
Roster: Jachro, Sharpie, toasty<br />
Global Rank: [336](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [96]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  476.9<br />
<br />
Final Rank Value (476.9) = Starting Rank Value (469.6) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.141[<sup>2</sup>](#table1)

The average of these factors is 0.036<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 469.6
- 400 + ( ( 0.036 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 469.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      417 | 2026-03-28 | F5        | L   | 1.000      | -            | -                | -                | -         |    -5.96 | FRIZZY, j3nni, Jachro, Sharpie, toasty |
|            6 |      431 | 2026-03-28 | Aura      | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    11.92 | FRIZZY, j3nni, Jachro, Sharpie, toasty |
|            5 |      445 | 2026-03-28 | F5        | L   | 1.000      | -            | -                | -                | -         |    -5.76 | FRIZZY, j3nni, Jachro, Sharpie, toasty |
|            4 |     4711 | 2025-11-09 | NRG       | L   | 0.213      | -            | -                | -                | -         |    -0.06 | Austin, duhpe, Jachro, Sharpie, toasty |
|            3 |     4746 | 2025-11-08 | NuTorious | W   | 0.208      | 0.333        | 0.000 (0.000)    | 0.067 (0.005)    | 1 (0.208) |     3.58 | Austin, duhpe, Jachro, Sharpie, toasty |
|            2 |     4755 | 2025-11-08 | M80       | L   | 0.207      | -            | -                | -                | -         |    -0.03 | Austin, duhpe, Jachro, Sharpie, toasty |
|            1 |     4757 | 2025-11-08 | NuTorious | W   | 0.207      | 0.333        | 0.000 (0.000)    | 0.067 (0.005)    | 1 (0.207) |     3.60 | Austin, duhpe, Jachro, Sharpie, toasty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
