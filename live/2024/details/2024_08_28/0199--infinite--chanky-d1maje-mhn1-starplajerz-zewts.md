### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [199](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [125]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  594.6<br />
<br />
Final Rank Value (594.6) = Starting Rank Value (539.2) + Head To Head Adjustments (55.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.2
- 400 + ( ( 0.070 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 539.2


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
|           14 |      713 | 2024-08-08 | Meteor          | L   | 1.000      | -            | -                | -                | -         |    -9.96 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |      839 | 2024-08-05 | kONO            | L   | 1.000      | -            | -                | -                | -         |    -6.61 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     1069 | 2024-07-30 | Lilmix          | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.075 (0.011)    | 0 (0.000) |    23.94 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     1319 | 2024-07-22 | Into the Breach | L   | 0.952      | -            | -                | -                | -         |    -5.97 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     1324 | 2024-07-22 | Sampi           | L   | 0.951      | -            | -                | -                | -         |    -4.88 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     1344 | 2024-07-21 | Heimo           | W   | 0.946      | 0.143        | 0.005 (0.001)    | 0.079 (0.011)    | 0 (0.000) |    16.88 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     1362 | 2024-07-20 | CPH Wolves      | L   | 0.941      | -            | -                | -                | -         |    -5.83 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     1396 | 2024-07-19 | 777             | W   | 0.934      | 0.143        | 0.013 (0.002)    | 0.125 (0.017)    | 0 (0.000) |    18.81 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     1471 | 2024-07-18 | Permitta        | W   | 0.926      | 0.143        | 0.036 (0.005)    | 0.932 (0.123)    | 0 (0.000) |    25.90 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     1940 | 2024-06-14 | TÓR             | L   | 0.698      | -            | -                | -                | -         |    -3.62 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     1968 | 2024-06-13 | CPH Wolves      | L   | 0.693      | -            | -                | -                | -         |    -4.51 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     2367 | 2024-06-04 | Sampi           | L   | 0.634      | -            | -                | -                | -         |    -2.41 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     2532 | 2024-05-29 | Illuminar       | W   | 0.594      | 0.379        | 0.011 (0.002)    | 0.389 (0.088)    | 0 (0.000) |    15.65 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     2721 | 2024-05-21 | Permitta        | L   | 0.541      | -            | -                | -                | -         |    -2.04 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
