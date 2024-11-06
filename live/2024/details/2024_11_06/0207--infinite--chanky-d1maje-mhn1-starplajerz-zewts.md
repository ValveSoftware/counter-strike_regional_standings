### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [207](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [125]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  542.8<br />
<br />
Final Rank Value (542.8) = Starting Rank Value (513.7) + Head To Head Adjustments (29.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.7
- 400 + ( ( 0.058 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 513.7


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
|           14 |     2613 | 2024-08-08 | Meteor          | L   | 0.599      | -            | -                | -                | -         |    -6.01 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     2739 | 2024-08-05 | kONO            | L   | 0.578      | -            | -                | -                | -         |    -3.24 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     2969 | 2024-07-30 | Lilmix          | W   | 0.539      | 0.143        | 0.004 (0.000)    | 0.026 (0.002)    | 0 (0.000) |    11.47 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     3219 | 2024-07-22 | Into the Breach | L   | 0.486      | -            | -                | -                | -         |    -1.61 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     3224 | 2024-07-22 | Sampi           | L   | 0.485      | -            | -                | -                | -         |    -1.41 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     3244 | 2024-07-21 | Heimo           | W   | 0.479      | 0.143        | 0.001 (0.000)    | 0.163 (0.011)    | 0 (0.000) |     9.64 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     3262 | 2024-07-20 | CPH Wolves      | L   | 0.475      | -            | -                | -                | -         |    -2.84 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     3296 | 2024-07-19 | 777             | W   | 0.468      | 0.143        | 0.001 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     8.89 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     3371 | 2024-07-18 | Permitta        | W   | 0.459      | 0.143        | 0.029 (0.002)    | 1.000 (0.066)    | 0 (0.000) |    13.85 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     3840 | 2024-06-14 | Lewandownskie   | L   | 0.232      | -            | -                | -                | -         |    -1.65 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     3868 | 2024-06-13 | CPH Wolves      | L   | 0.226      | -            | -                | -                | -         |    -1.37 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     4267 | 2024-06-04 | Sampi           | L   | 0.168      | -            | -                | -                | -         |    -0.37 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     4432 | 2024-05-29 | Illuminar       | W   | 0.128      | 0.379        | 0.013 (0.001)    | 0.591 (0.029)    | 0 (0.000) |     3.83 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     4621 | 2024-05-21 | Permitta        | L   | 0.075      | -            | -                | -                | -         |    -0.08 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
