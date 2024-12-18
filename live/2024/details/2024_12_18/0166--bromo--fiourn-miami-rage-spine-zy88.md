### Roster Details<br />
Team Name: Bromo<br />
Roster: FIOURN, Miami, rage, SPine, Zy88<br />
Global Rank: [166](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_18.md)<br />
Regional Rank: [14]( ../../standings_asia_2024_12_18.md)<br />
<br />
Final Rank Value:  696.1<br />
<br />
Final Rank Value (696.1) = Starting Rank Value (676.6) + Head To Head Adjustments (19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.6
- 400 + ( ( 0.144 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 676.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      970 | 2024-11-02 | Lynn Vision       | L   | 0.891      | -            | -                | -                | -         |    -5.15 | FIOURN, Miami, rage, SPine, Zy88 |
|           15 |     1249 | 2024-10-18 | Chinggis Warriors | W   | 0.792      | 0.143        | 0.029 (0.003)    | 0.350 (0.040)    | 0 (0.000) |    19.21 | FIOURN, Miami, rage, SPine, Zy88 |
|           14 |     1307 | 2024-10-16 | TYLOO             | L   | 0.779      | -            | -                | -                | -         |    -5.25 | FIOURN, Miami, rage, SPine, Zy88 |
|           13 |     1327 | 2024-10-15 | The Huns          | W   | 0.772      | 0.143        | 0.041 (0.004)    | 0.270 (0.030)    | 0 (0.000) |    18.41 | FIOURN, Miami, rage, SPine, Zy88 |
|           12 |     2798 | 2024-08-28 | Teamwork          | L   | 0.452      | -            | -                | -                | -         |   -10.06 | FIOURN, Miami, rage, SPine, Zy88 |
|           11 |     2814 | 2024-08-28 | CatEvil           | W   | 0.451      | 0.143        | 0.000 (0.000)    | 0.194 (0.012)    | 0 (0.000) |     5.04 | FIOURN, Miami, rage, SPine, Zy88 |
|           10 |     2849 | 2024-08-27 | Steel Helmet      | W   | 0.445      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     2.48 | FIOURN, Miami, rage, SPine, Zy88 |
|            9 |     2869 | 2024-08-27 | Teamwork          | L   | 0.444      | -            | -                | -                | -         |   -10.14 | FIOURN, Miami, rage, SPine, Zy88 |
|            8 |     2973 | 2024-08-25 | Teamwork          | W   | 0.431      | 0.143        | 0.000 (0.000)    | 0.073 (0.004)    | 0 (0.000) |     3.74 | FIOURN, Miami, rage, SPine, Zy88 |
|            7 |     2975 | 2024-08-25 | XNL               | W   | 0.431      | 0.143        | 0.000 (0.000)    | 0.036 (0.002)    | 0 (0.000) |     2.46 | FIOURN, Miami, rage, SPine, Zy88 |
|            6 |     2980 | 2024-08-25 | Steel Helmet      | W   | 0.430      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     2.33 | FIOURN, Miami, rage, SPine, Zy88 |
|            5 |     3877 | 2024-07-29 | CatEvil           | L   | 0.252      | -            | -                | -                | -         |    -5.18 | FIOURN, Miami, rage, SPine, Zy88 |
|            4 |     3885 | 2024-07-29 | ex-GR             | W   | 0.251      | 0.143        | 0.023 (0.001)    | 0.157 (0.006)    | 0 (0.000) |     4.49 | FIOURN, Miami, rage, SPine, Zy88 |
|            3 |     3915 | 2024-07-28 | NKT               | W   | 0.246      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.38 | FIOURN, Miami, rage, SPine, Zy88 |
|            2 |     3936 | 2024-07-27 | NomadS            | L   | 0.238      | -            | -                | -                | -         |    -5.44 | FIOURN, Miami, rage, SPine, Zy88 |
|            1 |     3961 | 2024-07-26 | The Huns          | W   | 0.232      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.28 | FIOURN, Miami, rage, SPine, Zy88 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,693.40)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
