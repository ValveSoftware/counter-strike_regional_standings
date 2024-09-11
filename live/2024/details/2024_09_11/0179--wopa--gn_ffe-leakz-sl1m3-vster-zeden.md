### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [179](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [116]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  631.3<br />
<br />
Final Rank Value (631.3) = Starting Rank Value (640.8) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.8
- 400 + ( ( 0.124 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 640.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      785 | 2024-08-20 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -12.49 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |      820 | 2024-08-19 | ALTERNATE aTTaX  | L   | 1.000      | -            | -                | -                | -         |    -7.78 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     1743 | 2024-07-21 | Sampi            | L   | 0.853      | -            | -                | -                | -         |    -5.89 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     1829 | 2024-07-19 | VP.Prodigy       | W   | 0.838      | 0.435        | 0.019 (0.007)    | 0.231 (0.084)    | 0 (0.000) |    19.17 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     1956 | 2024-07-17 | GUN5             | L   | 0.825      | -            | -                | -                | -         |    -3.67 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     2055 | 2024-07-15 | Passion UA       | L   | 0.811      | -            | -                | -                | -         |    -2.87 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     2260 | 2024-06-16 | FLuffy Gangsters | W   | 0.620      | 0.143        | 0.000 (0.000)    | 0.384 (0.034)    | 0 (0.000) |     9.04 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     2387 | 2024-06-12 | The Prodigies    | W   | 0.594      | 0.143        | 0.000 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     7.26 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     2399 | 2024-06-12 | CPH Wolves       | L   | 0.593      | -            | -                | -                | -         |    -5.31 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     2408 | 2024-06-11 | ADEPTS           | W   | 0.588      | 0.143        | 0.002 (0.000)    | 0.053 (0.004)    | 0 (0.000) |     9.24 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     2872 | 2024-06-01 | Illuminar        | L   | 0.518      | -            | -                | -                | -         |   -10.69 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     3266 | 2024-05-17 | LEON             | L   | 0.419      | -            | -                | -                | -         |    -6.27 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     3416 | 2024-05-14 | Secret           | W   | 0.399      | 0.143        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     4.09 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     3431 | 2024-05-13 | VP.Prodigy       | L   | 0.394      | -            | -                | -                | -         |    -3.35 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($213.71)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
