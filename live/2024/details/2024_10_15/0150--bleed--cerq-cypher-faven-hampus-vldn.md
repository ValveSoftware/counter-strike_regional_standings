### Roster Details<br />
Team Name: BLEED<br />
Roster: CeRq, CYPHER, faveN, hampus, VLDN<br />
Global Rank: [150](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [102]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  707.1<br />
<br />
Final Rank Value (707.1) = Starting Rank Value (693.4) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.4
- 400 + ( ( 0.151 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 693.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     4542 | 2024-05-11 | B8                | L   | 0.152      | -            | -                | -                | -         |    -0.62 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           19 |     4570 | 2024-05-09 | Sampi             | W   | 0.141      | 0.435        | 0.046 (0.003)    | 0.677 (0.042)    | 0 (0.000) |     3.77 | CYPHER, draken, faveN, hampus, VLDN |
|           18 |     4612 | 2024-05-07 | 1WIN              | L   | 0.128      | -            | -                | -                | -         |    -1.52 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           17 |     4636 | 2024-05-06 | Insilio           | W   | 0.119      | 0.396        | 0.038 (0.002)    | 0.690 (0.033)    | 0 (0.000) |     3.03 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           16 |     4702 | 2024-05-02 | AMKAL             | L   | 0.095      | -            | -                | -                | -         |    -0.43 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           15 |     4736 | 2024-05-01 | MOUZ NXT          | L   | 0.086      | -            | -                | -                | -         |    -0.70 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           14 |     4768 | 2024-04-30 | Permitta          | W   | 0.079      | 0.384        | 0.034 (0.001)    | 1.000 (0.030)    | 0 (0.000) |     1.94 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           13 |     4791 | 2024-04-28 | B8                | W   | 0.068      | 0.500        | 0.179 (0.006)    | 1.000 (0.034)    | 0 (0.000) |     1.88 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           12 |     4842 | 2024-04-26 | ex-Guild Eagles   | W   | 0.054      | -            | -                | -                | 0 (0.000) |     0.78 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           11 |     4850 | 2024-04-26 | DMS               | W   | 0.053      | 0.500        | -                | 0.557 (0.015)    | 0 (0.000) |     1.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|           10 |     4890 | 2024-04-24 | Permitta          | W   | 0.041      | 0.435        | 0.034 (0.001)    | 1.000 (0.018)    | 0 (0.000) |     1.02 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            9 |     4893 | 2024-04-24 | Nemiga            | L   | 0.040      | -            | -                | -                | -         |    -0.14 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            8 |     4909 | 2024-04-23 | B8                | W   | 0.034      | 0.500        | 0.179 (0.003)    | 1.000 (0.017)    | 0 (0.000) |     0.94 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            7 |     4918 | 2024-04-23 | Sashi             | L   | 0.033      | -            | -                | -                | -         |    -0.17 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            6 |     4927 | 2024-04-22 | Sangal            | W   | 0.027      | 0.500        | 0.201 (0.003)    | 0.543 (0.007)    | 0 (0.000) |     0.82 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            5 |     4929 | 2024-04-22 | Gaimin Gladiators | W   | 0.026      | 0.384        | 0.018 (0.000)    | 0.586 (0.006)    | 0 (0.000) |     0.64 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            4 |     4944 | 2024-04-21 | Illuminar         | W   | 0.021      | -            | -                | -                | -         |     0.15 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            3 |     4950 | 2024-04-21 | BIG               | W   | 0.020      | 0.384        | 0.203 (0.002)    | -                | -         |     0.61 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            2 |     4974 | 2024-04-20 | MOUZ NXT          | W   | 0.014      | 0.500        | 0.062 (0.000)    | 0.435 (0.003)    | -         |     0.33 | CeRq, CYPHER, faveN, hampus, VLDN   |
|            1 |     5030 | 2024-04-19 | Sampi             | W   | 0.006      | -            | -                | -                | -         |     0.17 | CeRq, CYPHER, faveN, hampus, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,962.92)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.201 | $500.00        | $100.59         |
| 2024-05-12 |      0.161 | $2,000.00      | $322.36         |
| 2024-04-24 |      0.040 | $25,000.00     | $1,010.51       |
| 2024-04-22 |      0.026 | $20,000.00     | $529.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
