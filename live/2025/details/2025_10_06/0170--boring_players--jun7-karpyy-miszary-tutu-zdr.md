### Roster Details<br />
Team Name: BORING PLAYERS<br />
Roster: Jun7, Karpyy, Miszary, tutu, zdr<br />
Global Rank: [170](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_06.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_10_06.md)<br />
<br />
Final Rank Value:  639.6<br />
<br />
Final Rank Value (639.6) = Starting Rank Value (582.8) + Head To Head Adjustments (56.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 582.8
- 400 + ( ( 0.093 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 582.8


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
|            9 |      773 | 2025-09-10 | The Huns   | L   | 1.000      | -            | -                | -                | -         |    -1.02 | Jun7, Karpyy, Miszary, tutu, zdr |
|            8 |      826 | 2025-09-09 | Kaleido    | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.283 (0.094)    | 0 (0.000) |    28.36 | Jun7, Karpyy, Miszary, tutu, zdr |
|            7 |      867 | 2025-09-08 | Rare Atom  | L   | 1.000      | -            | -                | -                | -         |    -1.55 | Jun7, Karpyy, Miszary, tutu, zdr |
|            6 |     1121 | 2025-08-27 | Kaleido    | L   | 0.937      | -            | -                | -                | -         |    -2.42 | Jun7, Karpyy, Miszary, tutu, zdr |
|            5 |     1170 | 2025-08-26 | FengDa     | L   | 0.925      | -            | -                | -                | -         |    -5.27 | Jun7, Karpyy, Miszary, tutu, zdr |
|            4 |     1174 | 2025-08-26 | Kaleido    | W   | 0.924      | 0.367        | 0.015 (0.005)    | 0.283 (0.096)    | 1 (0.924) |    26.99 | Jun7, Karpyy, Miszary, tutu, zdr |
|            3 |     1525 | 2025-08-13 | NomadS     | L   | 0.840      | -            | -                | -                | -         |    -5.64 | Jun7, Karpyy, Miszary, tutu, zdr |
|            2 |     1572 | 2025-08-12 | Just Swing | W   | 0.833      | 0.333        | 0.008 (0.002)    | 0.124 (0.034)    | 0 (0.000) |    18.44 | Jun7, Karpyy, Miszary, tutu, zdr |
|            1 |     1630 | 2025-08-11 | Rare Atom  | L   | 0.826      | -            | -                | -                | -         |    -1.11 | Jun7, Karpyy, Miszary, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
