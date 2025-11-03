### Roster Details<br />
Team Name: BORING PLAYERS<br />
Roster: Jun7, Karpyy, Miszary, tutu, zdr<br />
Global Rank: [207](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  586.2<br />
<br />
Final Rank Value (586.2) = Starting Rank Value (556.3) + Head To Head Adjustments (29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 556.3
- 400 + ( ( 0.083 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 556.3


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
|           11 |      670 | 2025-10-06 | Last Bullet | L   | 1.000      | -            | -                | -                | -         |   -10.73 | Jun7, karl, Miszary, tutu, zdr   |
|           10 |      729 | 2025-10-05 | The Huns    | L   | 1.000      | -            | -                | -                | -         |    -1.39 | Jun7, karl, Miszary, tutu, zdr   |
|            9 |     1670 | 2025-09-10 | The Huns    | L   | 0.840      | -            | -                | -                | -         |    -1.29 | Jun7, Karpyy, Miszary, tutu, zdr |
|            8 |     1724 | 2025-09-09 | Kaleido     | W   | 0.833      | 0.333        | 0.008 (0.002)    | 0.354 (0.098)    | 0 (0.000) |    23.09 | Jun7, Karpyy, Miszary, tutu, zdr |
|            7 |     1766 | 2025-09-08 | Rare Atom   | L   | 0.826      | -            | -                | -                | -         |    -1.89 | Jun7, Karpyy, Miszary, tutu, zdr |
|            6 |     2020 | 2025-08-27 | Kaleido     | L   | 0.750      | -            | -                | -                | -         |    -2.52 | Jun7, Karpyy, Miszary, tutu, zdr |
|            5 |     2069 | 2025-08-26 | FengDa      | L   | 0.738      | -            | -                | -                | -         |    -4.34 | Jun7, Karpyy, Miszary, tutu, zdr |
|            4 |     2073 | 2025-08-26 | Kaleido     | W   | 0.737      | 0.367        | 0.008 (0.002)    | 0.354 (0.096)    | 1 (0.737) |    20.98 | Jun7, Karpyy, Miszary, tutu, zdr |
|            3 |     2425 | 2025-08-13 | NomadS      | L   | 0.653      | -            | -                | -                | -         |    -5.27 | Jun7, Karpyy, Miszary, tutu, zdr |
|            2 |     2472 | 2025-08-12 | Just Swing  | W   | 0.646      | 0.333        | 0.004 (0.001)    | 0.214 (0.046)    | 0 (0.000) |    14.59 | Jun7, Karpyy, Miszary, tutu, zdr |
|            1 |     2531 | 2025-08-11 | Rare Atom   | L   | 0.639      | -            | -                | -                | -         |    -1.33 | Jun7, Karpyy, Miszary, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
