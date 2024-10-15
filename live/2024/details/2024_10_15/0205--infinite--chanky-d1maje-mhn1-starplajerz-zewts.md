### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [205](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [125]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  560.7<br />
<br />
Final Rank Value (560.7) = Starting Rank Value (521.3) + Head To Head Adjustments (39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.3
- 400 + ( ( 0.062 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 521.3


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
|           14 |     2164 | 2024-08-08 | Meteor          | L   | 0.746      | -            | -                | -                | -         |    -7.10 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     2290 | 2024-08-05 | kONO            | L   | 0.725      | -            | -                | -                | -         |    -4.62 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     2520 | 2024-07-30 | Lilmix          | W   | 0.686      | 0.143        | 0.010 (0.001)    | 0.038 (0.004)    | 0 (0.000) |    15.37 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     2770 | 2024-07-22 | Into the Breach | L   | 0.633      | -            | -                | -                | -         |    -2.17 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     2775 | 2024-07-22 | Sampi           | L   | 0.632      | -            | -                | -                | -         |    -2.03 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     2795 | 2024-07-21 | Heimo           | W   | 0.626      | 0.143        | 0.003 (0.000)    | 0.132 (0.012)    | 0 (0.000) |    12.01 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     2813 | 2024-07-20 | CPH Wolves      | L   | 0.622      | -            | -                | -                | -         |    -3.31 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     2847 | 2024-07-19 | 777             | W   | 0.615      | 0.143        | 0.004 (0.000)    | 0.049 (0.004)    | 0 (0.000) |    12.23 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     2922 | 2024-07-18 | Permitta        | W   | 0.606      | 0.143        | 0.034 (0.003)    | 1.000 (0.087)    | 0 (0.000) |    17.21 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     3391 | 2024-06-14 | Lewandownskie   | L   | 0.379      | -            | -                | -                | -         |    -2.08 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     3419 | 2024-06-13 | CPH Wolves      | L   | 0.373      | -            | -                | -                | -         |    -2.01 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     3818 | 2024-06-04 | Sampi           | L   | 0.315      | -            | -                | -                | -         |    -0.69 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     3983 | 2024-05-29 | Illuminar       | W   | 0.275      | 0.379        | 0.009 (0.001)    | 0.437 (0.046)    | 0 (0.000) |     7.32 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     4172 | 2024-05-21 | Permitta        | L   | 0.222      | -            | -                | -                | -         |    -0.70 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
