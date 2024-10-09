### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [206](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [127]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  562.5<br />
<br />
Final Rank Value (562.5) = Starting Rank Value (519.1) + Head To Head Adjustments (43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 519.1


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
|           14 |     2067 | 2024-08-08 | Meteor          | L   | 0.786      | -            | -                | -                | -         |    -7.61 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     2193 | 2024-08-05 | kONO            | L   | 0.765      | -            | -                | -                | -         |    -4.78 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     2423 | 2024-07-30 | Lilmix          | W   | 0.726      | 0.143        | 0.011 (0.001)    | 0.042 (0.004)    | 0 (0.000) |    16.43 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     2673 | 2024-07-22 | Into the Breach | L   | 0.673      | -            | -                | -                | -         |    -2.25 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     2678 | 2024-07-22 | Sampi           | L   | 0.672      | -            | -                | -                | -         |    -2.16 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     2698 | 2024-07-21 | Heimo           | W   | 0.666      | 0.143        | 0.003 (0.000)    | 0.135 (0.013)    | 0 (0.000) |    12.84 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     2716 | 2024-07-20 | CPH Wolves      | L   | 0.661      | -            | -                | -                | -         |    -2.50 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     2750 | 2024-07-19 | 777             | W   | 0.655      | 0.143        | 0.005 (0.000)    | 0.056 (0.005)    | 0 (0.000) |    13.22 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     2825 | 2024-07-18 | Permitta        | W   | 0.646      | 0.143        | 0.036 (0.003)    | 0.918 (0.085)    | 0 (0.000) |    18.36 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     3294 | 2024-06-14 | Lewandownskie   | L   | 0.419      | -            | -                | -                | -         |    -2.20 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     3322 | 2024-06-13 | CPH Wolves      | L   | 0.413      | -            | -                | -                | -         |    -1.55 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     3721 | 2024-06-04 | Sampi           | L   | 0.354      | -            | -                | -                | -         |    -0.74 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     3886 | 2024-05-29 | Illuminar       | W   | 0.314      | 0.379        | 0.003 (0.000)    | 0.045 (0.005)    | 0 (0.000) |     7.09 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     4075 | 2024-05-21 | Permitta        | L   | 0.262      | -            | -                | -                | -         |    -0.83 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
