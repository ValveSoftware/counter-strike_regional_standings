### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [164](../standings_global.md)<br />
Regional Rank: [104]( ../standings_europe.md)<br />
Final Rank Value:  678.0<br />
<br />
Final Rank Value (678.0) = Starting Rank Value (716.7) + Head To Head Adjustments (-38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.7
- 400 + ( ( 0.156 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 716.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      138 | 2024-07-20 | Heimo         | L   | 1.000      | -            | -                | -                | -         |   -17.03 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           17 |      151 | 2024-07-19 | INFINITE      | L   | 1.000      | -            | -                | -                | -         |   -20.73 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           16 |      531 | 2024-07-06 | Revenant      | L   | 1.000      | -            | -                | -                | -         |   -11.57 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |      614 | 2024-06-16 | CPH Wolves    | L   | 0.945      | -            | -                | -                | -         |   -11.57 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |      648 | 2024-06-15 | The Prodigies | W   | 0.939      | 0.143        | 0.000 (0.000)    | 0.105 (0.014)    | 0 (0.000) |     8.86 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |      751 | 2024-06-12 | ADEPTS        | W   | 0.919      | 0.143        | 0.003 (0.000)    | 0.031 (0.004)    | 0 (0.000) |    11.82 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |      767 | 2024-06-11 | The Prodigies | L   | 0.913      | -            | -                | -                | -         |   -19.74 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |     1217 | 2024-06-01 | VP.Prodigy    | L   | 0.845      | -            | -                | -                | -         |    -7.49 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |     1350 | 2024-05-26 | Metizport X   | W   | 0.806      | 0.322        | 0.007 (0.002)    | 0.029 (0.008)    | 0 (0.000) |     9.79 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     1577 | 2024-05-18 | DMS           | L   | 0.753      | -            | -                | -                | -         |    -7.34 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     1625 | 2024-05-17 | Space         | W   | 0.744      | 0.143        | 0.007 (0.001)    | 0.452 (0.048)    | 0 (0.000) |    15.60 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     1653 | 2024-05-16 | Rounds        | W   | 0.739      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.18 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     1692 | 2024-05-15 | GUN5          | L   | 0.734      | -            | -                | -                | -         |    -5.37 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     1835 | 2024-05-11 | Metizport X   | W   | 0.706      | 0.322        | 0.007 (0.002)    | 0.029 (0.007)    | 0 (0.000) |     9.02 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     2115 | 2024-04-27 | Sashi         | L   | 0.614      | -            | -                | -                | -         |    -1.33 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     2126 | 2024-04-27 | Preasy        | W   | 0.612      | 0.336        | 0.015 (0.003)    | 0.243 (0.050)    | 0 (0.000) |    11.83 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     2492 | 2024-04-13 | Norway        | L   | 0.520      | -            | -                | -                | -         |    -8.17 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     3100 | 2024-03-17 | INFURITY      | W   | 0.340      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.55 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,491.51)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.806 | $3,864.00      | $3,115.47       |
| 2024-04-27 |      0.614 | $2,655.00      | $1,629.28       |
| 2024-04-13 |      0.520 | $1,436.00      | $746.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
