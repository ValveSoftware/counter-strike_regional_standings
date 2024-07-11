### Roster Details<br />
Team Name: The Chosen Few<br />
Roster: choiv7, KalubeR, shaiK, Skrimo, SPELLAN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [147](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  729.8<br />
<br />
Final Rank Value (729.8) = Starting Rank Value (699.4) + Head To Head Adjustments (30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.4
- 400 + ( ( 0.142 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 699.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2694 | 2024-03-15 | Permitta        | L   | 0.413      | -            | -                | -                | -         |    -2.38 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     2724 | 2024-03-14 | Endpoint        | W   | 0.407      | 0.372        | 0.017 (0.003)    | 0.524 (0.079)    | 0 (0.000) |     9.54 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     2790 | 2024-03-12 | ARCRED          | W   | 0.394      | 0.372        | 0.055 (0.008)    | 0.365 (0.053)    | 0 (0.000) |     9.07 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     2850 | 2024-03-09 | Passion UA      | W   | 0.373      | 0.372        | 0.087 (0.012)    | 0.821 (0.114)    | 0 (0.000) |    10.00 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     2928 | 2024-03-06 | Insilio         | L   | 0.354      | -            | -                | -                | -         |    -2.27 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     3004 | 2024-03-03 | Metizport       | L   | 0.335      | -            | -                | -                | -         |    -1.93 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     3010 | 2024-03-03 | TSM             | W   | 0.334      | 0.143        | 0.010 (0.000)    | 0.095 (0.005)    | 0 (0.000) |     5.82 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     3016 | 2024-03-03 | KOI             | W   | 0.333      | 0.143        | 0.090 (0.004)    | 0.437 (0.021)    | 0 (0.000) |     9.89 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     3185 | 2024-02-24 | brazylijski luz | L   | 0.279      | -            | -                | -                | -         |    -2.94 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     3332 | 2024-02-17 | Entropiq        | L   | 0.234      | -            | -                | -                | -         |    -4.84 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     3337 | 2024-02-17 | kONO            | L   | 0.233      | -            | -                | -                | -         |    -2.19 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     3344 | 2024-02-17 | Monte           | L   | 0.232      | -            | -                | -                | -         |    -0.27 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     3490 | 2024-02-10 | ex-Anonymo      | W   | 0.188      | 0.358        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     1.33 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     3566 | 2024-02-04 | North Macedonia | W   | 0.147      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.15 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     3587 | 2024-02-03 | Zero Tenacity   | L   | 0.141      | -            | -                | -                | -         |    -0.40 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     3628 | 2024-02-02 | NAVI Junior     | W   | 0.133      | 0.143        | 0.006 (0.000)    | 0.057 (0.001)    | 0 (0.000) |     2.19 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     3631 | 2024-02-02 | Juggernauts     | W   | 0.133      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.67 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     3635 | 2024-02-02 | NAVI Junior     | L   | 0.132      | -            | -                | -                | -         |    -2.01 | choiv7, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($360.07)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
