### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [207](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_13.md)<br />
Regional Rank: [124]( ../../standings_europe_2024_11_13.md)<br />
<br />
Final Rank Value:  539.8<br />
<br />
Final Rank Value (539.8) = Starting Rank Value (512.7) + Head To Head Adjustments (27.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.7
- 400 + ( ( 0.056 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 512.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2782 | 2024-08-08 | Meteor          | L   | 0.552      | -            | -                | -                | -         |    -5.51 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     2908 | 2024-08-05 | kONO            | L   | 0.531      | -            | -                | -                | -         |    -2.88 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     3138 | 2024-07-30 | Lilmix          | W   | 0.492      | 0.143        | 0.003 (0.000)    | 0.021 (0.001)    | 0 (0.000) |    10.44 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     3388 | 2024-07-22 | Into the Breach | L   | 0.439      | -            | -                | -                | -         |    -1.42 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     3393 | 2024-07-22 | Sampi           | L   | 0.438      | -            | -                | -                | -         |    -1.14 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     3413 | 2024-07-21 | Heimo           | W   | 0.432      | 0.143        | 0.001 (0.000)    | 0.148 (0.009)    | 0 (0.000) |     8.90 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     3431 | 2024-07-20 | CPH Wolves      | L   | 0.428      | -            | -                | -                | -         |    -1.91 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     3465 | 2024-07-19 | 777             | W   | 0.421      | 0.143        | 0.001 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     7.95 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     3540 | 2024-07-18 | Permitta        | W   | 0.412      | 0.143        | 0.030 (0.002)    | 1.000 (0.059)    | 0 (0.000) |    12.68 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     4009 | 2024-06-14 | Lewandownskie   | L   | 0.185      | -            | -                | -                | -         |    -1.33 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     4037 | 2024-06-13 | CPH Wolves      | L   | 0.179      | -            | -                | -                | -         |    -0.80 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     4436 | 2024-06-04 | Sampi           | L   | 0.120      | -            | -                | -                | -         |    -0.25 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     4601 | 2024-05-29 | Illuminar       | W   | 0.081      | 0.379        | 0.013 (0.000)    | 0.536 (0.016)    | 0 (0.000) |     2.42 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     4790 | 2024-05-21 | Permitta        | L   | 0.028      | -            | -                | -                | -         |    -0.02 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
