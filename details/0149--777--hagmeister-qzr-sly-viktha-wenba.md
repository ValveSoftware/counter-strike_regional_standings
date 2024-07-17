### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [149](../standings_global.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
Final Rank Value:  739.4<br />
<br />
Final Rank Value (739.4) = Starting Rank Value (743.1) + Head To Head Adjustments (-3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.1
- 400 + ( ( 0.160 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 743.1


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
|           16 |      243 | 2024-07-06 | Revenant      | L   | 1.000      | -            | -                | -                | -         |   -11.68 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |      326 | 2024-06-16 | CPH Wolves    | L   | 0.992      | -            | -                | -                | -         |   -14.77 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |      360 | 2024-06-15 | The Prodigies | W   | 0.986      | 0.143        | 0.000 (0.000)    | 0.113 (0.016)    | 0 (0.000) |     8.76 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |      463 | 2024-06-12 | ADEPTS        | W   | 0.966      | 0.143        | 0.003 (0.000)    | 0.033 (0.005)    | 0 (0.000) |    12.25 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |      479 | 2024-06-11 | The Prodigies | L   | 0.960      | -            | -                | -                | -         |   -21.28 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |      929 | 2024-06-01 | VP.Prodigy    | L   | 0.892      | -            | -                | -                | -         |    -7.54 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |     1062 | 2024-05-26 | Metizport X   | W   | 0.854      | 0.322        | 0.008 (0.002)    | 0.031 (0.009)    | 0 (0.000) |    10.14 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     1289 | 2024-05-18 | DMS           | L   | 0.800      | -            | -                | -                | -         |    -7.29 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     1337 | 2024-05-17 | Space         | W   | 0.792      | 0.143        | 0.009 (0.001)    | 0.430 (0.049)    | 0 (0.000) |    16.99 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     1365 | 2024-05-16 | Rounds        | W   | 0.786      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.98 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     1404 | 2024-05-15 | GUN5          | L   | 0.781      | -            | -                | -                | -         |    -5.31 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     1547 | 2024-05-11 | Metizport X   | W   | 0.754      | 0.322        | 0.008 (0.002)    | 0.031 (0.008)    | 0 (0.000) |     9.47 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     1827 | 2024-04-27 | Sashi         | L   | 0.661      | -            | -                | -                | -         |    -1.51 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     1838 | 2024-04-27 | Preasy        | W   | 0.660      | 0.336        | 0.013 (0.003)    | 0.171 (0.038)    | 0 (0.000) |    12.32 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     2204 | 2024-04-13 | Norway        | L   | 0.567      | -            | -                | -                | -         |    -8.80 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     2812 | 2024-03-17 | INFURITY      | W   | 0.388      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.55 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,867.19)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.854 | $3,864.00      | $3,297.95       |
| 2024-04-27 |      0.661 | $2,655.00      | $1,754.66       |
| 2024-04-13 |      0.567 | $1,436.00      | $814.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
