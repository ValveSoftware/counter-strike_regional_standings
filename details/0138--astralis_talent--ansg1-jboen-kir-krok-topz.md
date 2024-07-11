### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, JBOEN, kiR, kroK, tOPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [89]( ../standings_europe.md)<br />
Final Rank Value:  755.9<br />
<br />
Final Rank Value (755.9) = Starting Rank Value (769.8) + Head To Head Adjustments (-13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.8
- 400 + ( ( 0.175 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 769.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1801 | 2024-04-21 | MASONIC        | L   | 0.659      | -            | -                | -                | -         |    -8.28 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           12 |     1806 | 2024-04-21 | Preasy         | W   | 0.658      | 0.318        | 0.012 (0.003)    | 0.176 (0.037)    | 1 (0.658) |    12.00 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           11 |     1822 | 2024-04-20 | Kronjyllands   | W   | 0.654      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.654) |     2.53 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|           10 |     2022 | 2024-04-15 | Czech Republic | L   | 0.618      | -            | -                | -                | -         |    -1.64 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            9 |     2196 | 2024-04-09 | Alliance       | L   | 0.578      | -            | -                | -                | -         |    -5.21 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            8 |     2522 | 2024-03-25 | Sashi          | L   | 0.481      | -            | -                | -                | -         |    -8.66 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            7 |     2525 | 2024-03-25 | XI             | W   | 0.480      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.17 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            6 |     2861 | 2024-03-09 | NOM            | L   | 0.372      | -            | -                | -                | -         |    -9.26 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            5 |     3871 | 2024-01-21 | MOUZ NXT       | L   | 0.051      | -            | -                | -                | -         |    -0.21 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            4 |     3912 | 2024-01-20 | Permitta       | W   | 0.045      | 0.333        | 0.038 (0.001)    | 0.837 (0.013)    | 0 (0.000) |     1.05 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            3 |     3962 | 2024-01-19 | MOUZ NXT       | L   | 0.039      | -            | -                | -                | -         |    -0.16 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            2 |     4070 | 2024-01-17 | Permitta       | W   | 0.026      | 0.333        | 0.038 (0.000)    | 0.837 (0.007)    | 0 (0.000) |     0.60 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            1 |     4187 | 2024-01-14 | Zero Tenacity  | W   | 0.005      | 0.333        | 0.153 (0.000)    | 1.000 (0.002)    | 0 (0.000) |     0.14 | ANSG1, JBOEN, kiR, kroK, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,809.87)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.659 | $1,426.00      | $939.49         |
| 2024-03-25 |      0.481 | $1,490.00      | $716.89         |
| 2024-01-21 |      0.051 | $3,000.00      | $153.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
