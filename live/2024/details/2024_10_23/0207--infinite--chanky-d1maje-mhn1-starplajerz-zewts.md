### Roster Details<br />
Team Name: INFINITE<br />
Roster: CHANKY, d1maje, mhN1, starplajerz, zewts<br />
Global Rank: [207](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [123]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  557.5<br />
<br />
Final Rank Value (557.5) = Starting Rank Value (520.5) + Head To Head Adjustments (37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.5
- 400 + ( ( 0.061 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 520.5


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
|           14 |     2342 | 2024-08-08 | Meteor          | L   | 0.692      | -            | -                | -                | -         |    -6.52 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           13 |     2468 | 2024-08-05 | kONO            | L   | 0.671      | -            | -                | -                | -         |    -3.79 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           12 |     2698 | 2024-07-30 | Lilmix          | W   | 0.631      | 0.143        | 0.009 (0.001)    | 0.034 (0.003)    | 0 (0.000) |    14.10 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           11 |     2948 | 2024-07-22 | Into the Breach | L   | 0.578      | -            | -                | -                | -         |    -1.85 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|           10 |     2953 | 2024-07-22 | Sampi           | L   | 0.577      | -            | -                | -                | -         |    -1.66 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            9 |     2973 | 2024-07-21 | Heimo           | W   | 0.572      | 0.143        | 0.003 (0.000)    | 0.163 (0.013)    | 0 (0.000) |    11.44 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            8 |     2991 | 2024-07-20 | CPH Wolves      | L   | 0.567      | -            | -                | -                | -         |    -2.98 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            7 |     3025 | 2024-07-19 | 777             | W   | 0.560      | 0.143        | 0.003 (0.000)    | 0.039 (0.003)    | 0 (0.000) |    11.08 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            6 |     3100 | 2024-07-18 | Permitta        | W   | 0.552      | 0.143        | 0.036 (0.003)    | 1.000 (0.079)    | 0 (0.000) |    15.90 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            5 |     3569 | 2024-06-14 | Lewandownskie   | L   | 0.324      | -            | -                | -                | -         |    -1.85 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            4 |     3597 | 2024-06-13 | CPH Wolves      | L   | 0.318      | -            | -                | -                | -         |    -1.70 | CHANKY, d1maje, mhN1, starplajerz, zewts |
|            3 |     3996 | 2024-06-04 | Sampi           | L   | 0.260      | -            | -                | -                | -         |    -0.53 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            2 |     4161 | 2024-05-29 | Illuminar       | W   | 0.220      | 0.379        | 0.009 (0.001)    | 0.464 (0.039)    | 0 (0.000) |     5.89 | d1maje, mhN1, starplajerz, waZz, zewts   |
|            1 |     4350 | 2024-05-21 | Permitta        | L   | 0.167      | -            | -                | -                | -         |    -0.45 | d1maje, mhN1, starplajerz, waZz, zewts   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
