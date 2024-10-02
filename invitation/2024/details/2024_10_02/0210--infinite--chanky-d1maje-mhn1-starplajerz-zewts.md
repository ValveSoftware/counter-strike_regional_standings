### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [210](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [127]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  565.9<br />
<br />
Final Rank Value (565.9) = Starting Rank Value (521.1) + Head To Head Adjustments (44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.1
- 400 + ( ( 0.063 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 521.1


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
|           14 |     1847 | 2024-08-08 | Meteor          | L   | 0.831      | -            | -                | -                | -         |    -8.20 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     1973 | 2024-08-05 | kONO            | L   | 0.811      | -            | -                | -                | -         |    -5.32 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     2203 | 2024-07-30 | Lilmix          | W   | 0.771      | 0.143        | 0.012 (0.001)    | 0.048 (0.005)    | 0 (0.000) |    17.49 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     2453 | 2024-07-22 | Into the Breach | L   | 0.718      | -            | -                | -                | -         |    -2.49 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     2458 | 2024-07-22 | Sampi           | L   | 0.717      | -            | -                | -                | -         |    -3.00 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     2478 | 2024-07-21 | Heimo           | W   | 0.712      | 0.143        | 0.002 (0.000)    | 0.043 (0.004)    | 0 (0.000) |    12.86 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     2496 | 2024-07-20 | CPH Wolves      | L   | 0.707      | -            | -                | -                | -         |    -2.78 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     2530 | 2024-07-19 | 777             | W   | 0.700      | 0.143        | 0.005 (0.001)    | 0.067 (0.007)    | 0 (0.000) |    13.85 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     2605 | 2024-07-18 | Permitta        | W   | 0.691      | 0.143        | 0.030 (0.003)    | 0.964 (0.095)    | 0 (0.000) |    19.36 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     3074 | 2024-06-14 | Lewandownskie   | L   | 0.464      | -            | -                | -                | -         |    -2.40 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     3102 | 2024-06-13 | CPH Wolves      | L   | 0.458      | -            | -                | -                | -         |    -1.79 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     3501 | 2024-06-04 | Sampi           | L   | 0.400      | -            | -                | -                | -         |    -1.18 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     3666 | 2024-05-29 | Illuminar       | W   | 0.360      | 0.379        | 0.007 (0.001)    | 0.423 (0.058)    | 0 (0.000) |     9.51 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     3855 | 2024-05-21 | Permitta        | L   | 0.307      | -            | -                | -                | -         |    -1.11 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
