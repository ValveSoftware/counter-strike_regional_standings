### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, JBOEN, kiR, kroK, tOPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [95]( ../standings_europe.md)<br />
Final Rank Value:  751.2<br />
<br />
Final Rank Value (751.2) = Starting Rank Value (764.1) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.143[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.1
- 400 + ( ( 0.170 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 764.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1965 | 2024-04-21 | MASONIC      | L   | 0.619      | -            | -                | -                | -         |    -7.65 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            9 |     1970 | 2024-04-21 | Preasy       | W   | 0.618      | 0.318        | 0.013 (0.002)    | 0.171 (0.034)    | 1 (0.618) |    11.58 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            8 |     1986 | 2024-04-20 | Kronjyllands | W   | 0.614      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.614) |     2.43 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            7 |     2186 | 2024-04-15 | ECLOT        | L   | 0.578      | -            | -                | -                | -         |    -1.48 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            6 |     2360 | 2024-04-09 | Alliance     | L   | 0.538      | -            | -                | -                | -         |    -4.78 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            5 |     2686 | 2024-03-25 | Sashi        | L   | 0.442      | -            | -                | -                | -         |    -7.89 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            4 |     2689 | 2024-03-25 | XI           | W   | 0.441      | 0.342        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.02 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            3 |     3025 | 2024-03-09 | NOM          | L   | 0.333      | -            | -                | -                | -         |    -8.20 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            2 |     4035 | 2024-01-21 | MOUZ NXT     | L   | 0.012      | -            | -                | -                | -         |    -0.05 | ANSG1, JBOEN, kiR, kroK, tOPZ |
|            1 |     4076 | 2024-01-20 | Permitta     | W   | 0.005      | 0.333        | 0.039 (0.000)    | 0.794 (0.001)    | 0 (0.000) |     0.13 | ANSG1, JBOEN, kiR, kroK, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,575.53)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-21 |      0.619 | $1,426.00      | $883.00         |
| 2024-03-25 |      0.442 | $1,490.00      | $657.88         |
| 2024-01-21 |      0.012 | $3,000.00      | $34.65          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
