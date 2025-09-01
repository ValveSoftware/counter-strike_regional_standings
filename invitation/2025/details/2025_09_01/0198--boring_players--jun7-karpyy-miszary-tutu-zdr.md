### Roster Details<br />
Team Name: BORING PLAYERS<br />
Roster: Jun7, Karpyy, Miszary, tutu, zdr<br />
Global Rank: [198](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [31]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  599.9<br />
<br />
Final Rank Value (599.9) = Starting Rank Value (572.7) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.7
- 400 + ( ( 0.090 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 572.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       88 | 2025-08-27 | Kaleido    | L   | 1.000      | -            | -                | -                | -         |    -4.77 | Jun7, Karpyy, Miszary, tutu, zdr |
|            5 |      121 | 2025-08-26 | FengDa     | L   | 1.000      | -            | -                | -                | -         |    -9.45 | Jun7, Karpyy, Miszary, tutu, zdr |
|            4 |      124 | 2025-08-26 | Kaleido    | W   | 1.000      | 0.367        | 0.011 (0.004)    | 0.317 (0.116)    | 1 (1.000) |    27.01 | Jun7, Karpyy, Miszary, tutu, zdr |
|            3 |      409 | 2025-08-13 | NomadS     | L   | 1.000      | -            | -                | -                | -         |    -6.80 | Jun7, Karpyy, Miszary, tutu, zdr |
|            2 |      448 | 2025-08-12 | Just Swing | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.153 (0.051)    | 0 (0.000) |    22.29 | Jun7, Karpyy, Miszary, tutu, zdr |
|            1 |      499 | 2025-08-11 | Rare Atom  | L   | 1.000      | -            | -                | -                | -         |    -1.05 | Jun7, Karpyy, Miszary, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
