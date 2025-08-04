### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, tatm<br />
Global Rank: [247](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  508.6<br />
<br />
Final Rank Value (508.6) = Starting Rank Value (494.0) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.0
- 400 + ( ( 0.050 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 494.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3141 | 2025-03-08 | Wildcard      | L   | 0.209      | -            | -                | -                | -         |    -0.49 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            5 |     3147 | 2025-03-08 | LAG           | W   | 0.208      | 0.143        | 0.014 (0.000)    | 0.485 (0.014)    | 0 (0.000) |     5.52 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            4 |     3212 | 2025-03-07 | MIGHT         | W   | 0.203      | 0.143        | 0.001 (0.000)    | 0.279 (0.008)    | 0 (0.000) |     4.63 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            3 |     3229 | 2025-03-07 | Marsborne     | W   | 0.202      | 0.143        | 0.010 (0.000)    | 0.608 (0.018)    | 0 (0.000) |     5.76 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            2 |     3307 | 2025-03-06 | Davai Napadai | W   | 0.194      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.29 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            1 |     3337 | 2025-03-05 | MCS           | L   | 0.188      | -            | -                | -                | -         |    -3.18 | AlekS, corn, CrePoW, ReFuZR, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
