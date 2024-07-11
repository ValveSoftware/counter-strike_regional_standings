### Roster Details<br />
Team Name: 777<br />
Roster: Hagmeister, qzr, SLY, Viktha, Wenba<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  734.2<br />
<br />
Final Rank Value (734.2) = Starting Rank Value (737.9) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.9
- 400 + ( ( 0.160 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 737.9


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
|           16 |       79 | 2024-07-06 | Revenant      | L   | 1.000      | -            | -                | -                | -         |   -12.10 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           15 |      162 | 2024-06-16 | CPH Wolves    | L   | 1.000      | -            | -                | -                | -         |   -15.62 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           14 |      196 | 2024-06-15 | The Prodigies | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.116 (0.017)    | 0 (0.000) |     9.00 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           13 |      299 | 2024-06-12 | ADEPTS        | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.034 (0.005)    | 0 (0.000) |    12.70 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           12 |      315 | 2024-06-11 | The Prodigies | L   | 1.000      | -            | -                | -                | -         |   -21.99 | Hagmeister, qzr, SLY, Viktha, Wenba          |
|           11 |      765 | 2024-06-01 | VP.Prodigy    | L   | 0.932      | -            | -                | -                | -         |    -7.76 | Affava, Hagmeister, qzr, Viktha, Wenba       |
|           10 |      898 | 2024-05-26 | Metizport X   | W   | 0.893      | 0.322        | 0.008 (0.002)    | 0.033 (0.009)    | 0 (0.000) |    10.56 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            9 |     1125 | 2024-05-18 | DMS           | L   | 0.840      | -            | -                | -                | -         |    -7.62 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            8 |     1173 | 2024-05-17 | Space         | W   | 0.831      | 0.143        | 0.009 (0.001)    | 0.404 (0.048)    | 0 (0.000) |    17.49 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            7 |     1201 | 2024-05-16 | Rounds        | W   | 0.826      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.19 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            6 |     1240 | 2024-05-15 | GUN5          | L   | 0.820      | -            | -                | -                | -         |    -5.54 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            5 |     1383 | 2024-05-11 | Metizport X   | W   | 0.793      | 0.322        | 0.008 (0.002)    | 0.033 (0.008)    | 0 (0.000) |     9.94 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            4 |     1663 | 2024-04-27 | Sashi         | L   | 0.701      | -            | -                | -                | -         |    -1.46 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            3 |     1674 | 2024-04-27 | Preasy        | W   | 0.699      | 0.336        | 0.012 (0.003)    | 0.176 (0.041)    | 0 (0.000) |    13.01 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            2 |     2040 | 2024-04-13 | Norway        | L   | 0.607      | -            | -                | -                | -         |    -9.33 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |
|            1 |     2648 | 2024-03-17 | INFURITY      | W   | 0.427      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.76 | Affava, Hagmeister, MadeInRed, Viktha, Wenba |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,182.29)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      0.893 | $3,864.00      | $3,451.00       |
| 2024-04-27 |      0.701 | $2,655.00      | $1,859.83       |
| 2024-04-13 |      0.607 | $1,436.00      | $871.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
