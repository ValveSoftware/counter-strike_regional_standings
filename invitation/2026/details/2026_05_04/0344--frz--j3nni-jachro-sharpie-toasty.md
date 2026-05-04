### Roster Details<br />
Team Name: FRZ<br />
Roster: j3nni, Jachro, Sharpie, toasty<br />
Global Rank: [344](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [90]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  448.4<br />
<br />
Final Rank Value (448.4) = Starting Rank Value (446.8) + Head To Head Adjustments (1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 446.8
- 400 + ( ( 0.025 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 446.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      304 | 2026-04-25 | Marsborne | L   | 1.000      | -            | -                | -                | -         |    -3.15 | brawckzz, j3nni, Jachro, Sharpie, toasty |
|            8 |      324 | 2026-04-25 | Wildcard  | L   | 1.000      | -            | -                | -                | -         |    -0.19 | brawckzz, j3nni, Jachro, Sharpie, toasty |
|            7 |     1484 | 2026-03-28 | F5        | L   | 0.954      | -            | -                | -                | -         |    -4.32 | FRIZZY, j3nni, Jachro, Sharpie, toasty   |
|            6 |     1500 | 2026-03-28 | Aura      | W   | 0.954      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.954) |    12.66 | FRIZZY, j3nni, Jachro, Sharpie, toasty   |
|            5 |     1514 | 2026-03-28 | F5        | L   | 0.953      | -            | -                | -                | -         |    -4.16 | FRIZZY, j3nni, Jachro, Sharpie, toasty   |
|            4 |     5808 | 2025-11-09 | NRG       | L   | 0.026      | -            | -                | -                | -         |    -0.01 | Austin, duhpe, Jachro, Sharpie, toasty   |
|            3 |     5843 | 2025-11-08 | NuTorious | W   | 0.021      | 0.333        | 0.000 (0.000)    | 0.098 (0.001)    | 1 (0.021) |     0.41 | Austin, duhpe, Jachro, Sharpie, toasty   |
|            2 |     5852 | 2025-11-08 | M80       | L   | 0.020      | -            | -                | -                | -         |    -0.00 | Austin, duhpe, Jachro, Sharpie, toasty   |
|            1 |     5854 | 2025-11-08 | NuTorious | W   | 0.020      | 0.333        | 0.000 (0.000)    | 0.098 (0.001)    | 1 (0.020) |     0.39 | Austin, duhpe, Jachro, Sharpie, toasty   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
